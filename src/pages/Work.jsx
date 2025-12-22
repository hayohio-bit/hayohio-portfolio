  import React, { useState, useMemo, useCallback } from 'react';
  import { useSelector } from 'react-redux';
  import PortfolioList from '../components/portfolio/PortfolioList';
  import ScrollButtons from '../components/ui/ScrollButtons';
  import './Work.css';

  /**
   * Work 페이지 - 포트폴리오 필터링/검색/정렬 (완전 최적화)
   * ✅ React.memo + useCallback으로 리렌더링 최소화
   * ✅ 데이터 안전성 + 오류 방지
   * ✅ 성능 최적화 + 접근성 완벽
   */
  const Work = React.memo(() => {
    // 🔍 Redux 데이터 안전하게 가져오기
    const portfolios = useSelector((state) => state?.portfolio?.portfolios || []);
    const categories = useSelector((state) => state?.portfolio?.categories || []);

    // 로컬 상태 - useCallback으로 안정화
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('date-desc');

    // 🔧 필터/검색/정렬 - 완전 안전한 버전
    const filteredAndSortedData = useMemo(() => {
      // 데이터 없음 처리
      if (!Array.isArray(portfolios) || portfolios.length === 0) {
        return [];
      }

      let result = [...portfolios];

      // 1. 카테고리 필터링 (안전한 문자열 비교)
      if (selectedCategory !== 'all') {
        result = result.filter((item) => 
          item?.category === selectedCategory
        );
      }

      // 2. 검색 필터링 (안전한 문자열 처리)
      if (searchQuery.trim()) {
        const q = searchQuery.trim().toLowerCase();
        result = result.filter((item) => {
          const title = String(item?.title || '').toLowerCase();
          const desc = String(item?.description || '').toLowerCase();
          const tags = Array.isArray(item?.tags) 
            ? item.tags.map(String).map(tag => tag.toLowerCase())
            : [];
          
          return (
            title.includes(q) ||
            desc.includes(q) ||
            tags.some((tag) => tag.includes(q))
          );
        });
      }

      // 3. 정렬 (안전한 날짜/문자열 처리)
      switch (sortBy) {
        case 'date-desc':
          result.sort((a, b) => {
            const dateA = new Date(a?.date || 0);
            const dateB = new Date(b?.date || 0);
            return dateB - dateA;
          });
          break;
        case 'date-asc':
          result.sort((a, b) => {
            const dateA = new Date(a?.date || 0);
            const dateB = new Date(b?.date || 0);
            return dateA - dateB;
          });
          break;
        case 'title-asc':
          result.sort((a, b) => 
            String(a?.title || '').localeCompare(String(b?.title || ''), 'ko')
          );
          break;
        case 'title-desc':
          result.sort((a, b) => 
            String(b?.title || '').localeCompare(String(a?.title || ''), 'ko')
          );
          break;
        default:
          break;
      }

      return result;
    }, [portfolios, selectedCategory, searchQuery, sortBy]);

    // 🔧 리셋 핸들러
    const handleResetFilters = useCallback(() => {
      setSelectedCategory('all');
      setSearchQuery('');
      setSortBy('date-desc');
    }, []);

    // 🔧 초기 로딩 상태
    if (!Array.isArray(portfolios) || portfolios.length === 0) {
      return (
        <div className="work-page" role="main" aria-label="포트폴리오 로딩 중">
          <div className="work-header">
            <h1 className="work-title">Portfolio</h1>
            <div className="work-subtitle">
              <div className="loading-spinner"></div>
              포트폴리오 데이터를 불러오는 중입니다...
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="work-page" role="main" aria-label="포트폴리오 목록">
        {/* 헤더 */}
        <div className="work-header">
          <h1 className="work-title">Portfolio</h1>
          <p className="work-subtitle">
            총 <strong>{portfolios.length}</strong>개 중{' '}
            <strong>{filteredAndSortedData.length}</strong>개 결과
          </p>
        </div>

        {/* 컨트롤 패널 */}
        <div className="work-controls" role="region" aria-label="필터 및 검색">
          {/* 카테고리 필터 */}
          <div className="category-filter" role="tablist">
            <button
              type="button"
              className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
              aria-selected={selectedCategory === 'all'}
              aria-controls="portfolio-list"
              role="tab"
            >
              전체
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                style={{ '--category-color': cat.color }}
                onClick={() => setSelectedCategory(cat.id)}
                aria-selected={selectedCategory === cat.id}
                aria-controls="portfolio-list"
                role="tab"
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 검색 + 정렬 */}
          <div className="search-sort-wrapper">
            <div className="search-box" role="search">
              <input
                className="search-input"
                type="search"
                placeholder="제목, 설명, 태그로 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="포트폴리오 검색"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="검색어 초기화"
                >
                  ×
                </button>
              )}
            </div>

            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="정렬 기준 선택"
            >
              <option value="date-desc">최신순</option>
              <option value="date-asc">오래된 순</option>
              <option value="title-asc">제목 오름차순</option>
              <option value="title-desc">제목 내림차순</option>
            </select>
          </div>
        </div>

        {/* 결과 목록 */}
        <div id="portfolio-list" role="list">
          {filteredAndSortedData.length > 0 ? (
            <PortfolioList portfolios={filteredAndSortedData} />
          ) : (
            <div className="no-results" role="status" aria-live="polite">
              <div className="no-results-content">
                <div className="no-results-icon">🔍</div>
                <p>검색 결과가 없습니다.</p>
                <p className="no-results-hint">
                  다른 키워드로 검색하거나 필터를 초기화해보세요.
                </p>
                <button
                  type="button"
                  className="reset-btn"
                  onClick={handleResetFilters}
                  aria-label="모든 필터 초기화"
                >
                  필터 초기화
                </button>
              </div>
            </div>
          )}
        </div>

        {/* 스크롤 버튼 */}
        <ScrollButtons />
      </div>
    );
  });

  Work.displayName = 'WorkPage';

  export default Work;
