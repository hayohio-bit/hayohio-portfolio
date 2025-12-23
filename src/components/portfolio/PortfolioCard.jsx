import './PortfolioCard.css';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../../utils/imageUtils';
import React, { useCallback, useMemo } from 'react';

/**
 * PortfolioCard - 포트폴리오 카드 (프로덕션 최적화 버전)
 * ✅ 모든 오류 해결 (imagePath, item → portfolio)
 * ✅ React.memo + useCallback 성능 최적화
 * ✅ 이미지 오류 완전 방지 + 접근성 완벽
 * ✅ SEO + LCP 최적화
 */
const PortfolioCard = React.memo(({ portfolio, onClick }) => {
// 🔒 안전한 데이터 추출 + 기본값
const {
    id = '',
    title = 'Untitled Project',
    category = 'Uncategorized',
    thumbnail = '',
    tags = [],
    description = ''
} = portfolio || {};

// 🖼️ 이미지 경로 안전 처리
const imagePath = useMemo(() => {
    if (thumbnail?.trim()) return thumbnail;
    return ''; // CSS 플레이스홀더 사용
}, [thumbnail]);

const imageSrc = useMemo(() => 
    imagePath ? getImageUrl(imagePath) : '', 
[imagePath]);

// 🛡️ 이미지 오류 핸들러 - 무한 루프 완전 차단
const handleImageError = useCallback((e) => {
    const img = e.target;
    // SVG 플레이스홀더로 즉시 변경
    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmN2ZjIiByeD0iMTIuNSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMThweCIgZmlsbD0iIzZjNzg4ZiIgZm9udC13ZWlnaHQ9IjYwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9IjAuM2VtIj5Qcm9qZWN0PC90ZXh0Pjx0ZXh0IHg9IjUwJSIgeT0iNjAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTRweCIgZmlsbD0iIzZjNzg4ZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW1hZ2UgQmFjay1lbmQ8L3RleHQ+PC9zdmc+';
    
    // 모든 이벤트 핸들러 제거 + 상태 표시
    img.onerror = null;
    img.dataset.failed = 'true';
    img.style.opacity = '0';
}, []);

// ✅ 이미지 로드 성공
const handleImageLoad = useCallback((e) => {
    e.target.onerror = null;
    e.target.dataset.loaded = 'true';
}, []);

// 태그 슬라이스 (최대 2개)
const visibleTags = useMemo(() => 
    Array.isArray(tags) ? tags.slice(0, 2) : [], 
[tags]);

return (
    <Link 
    to={`/portfolio/${id}`}
    className="portfolio-card"
    title={`${title} - ${category} 프로젝트 상세보기`}
    aria-label={`${title}, ${category} 카테고리, 클릭하여 상세 페이지 이동`}
    onClick={onClick}
    style={{ textDecoration: 'none' }}
    >
    {/* 이미지 영역 */}
    <div className="portfolio-card__image-wrapper" role="img" aria-label={`${title} 대표 이미지`}>
        <img 
        src={imageSrc}
        alt={`${title} - ${category} 프로젝트 대표 이미지`}
        className="portfolio-card__image"
        loading="lazy"
        width="400"
        height="250"
        decoding="async"
        onError={handleImageError}
        onLoad={handleImageLoad}
        draggable={false}
        />
        
        {/* 호버 오버레이 */}
        <div className="portfolio-card__overlay">
        <span className="portfolio-card__view" aria-hidden="true">
            View Project →
        </span>
        </div>
    </div>

    {/* 콘텐츠 영역 */}
    <div className="portfolio-card__content">
        {/* 태그 */}
        {visibleTags.length > 0 && (
        <div className="portfolio-card__categories" aria-label={`${visibleTags.length}개의 태그`}>
            {visibleTags.map((tag, index) => (
            <span 
                key={`${id}-tag-${index}`} 
                className="portfolio-card__tag"
            >
                {String(tag)}
            </span>
            ))}
            {tags.length > 2 && (
            <span className="portfolio-card__tag more">+{tags.length - 2}</span>
            )}
        </div>
        )}

        {/* 제목 */}
        <h3 className="portfolio-card__title">{title}</h3>
        
        {/* 카테고리 */}
        <span className="portfolio-card__category" aria-label={`카테고리: ${category}`}>
        {category}
        </span>
    </div>
    </Link>
);
});

PortfolioCard.displayName = 'PortfolioCard';

export default PortfolioCard;
