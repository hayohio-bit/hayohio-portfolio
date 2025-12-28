import './Detail.css';
import { getProjectById } from '../../data/projectUtils';
import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
/**
 * 📄 포트폴리오 상세 페이지
 * - URL 파라미터(id)로 프로젝트 조회
 * - 없으면 /work로 리다이렉트
 * - 이미지 경로는 getImageUrl()로 BASE_URL 자동 적용
 */
export default function Detail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = getProjectById(id);

    useEffect(() => {
        if (!project) navigate('/work', { replace: true });
    }, [project, navigate]);

    if (!project) {
        return <div className="detail-not-found"><p>로딩 중...</p></div>;
    }
// Detail.jsx 임시 디버그 (지우기 전에 확인)
console.log('📁 이미지 경로:', project.images.map(img => img.url));
<img src={project.images[0].url} alt="test" />

    return (
        <article className="detail-page">
            <div className="detail-inner">
                {/* 헤더 */}
                <header className="detail-hero">
                    <div className="detail-meta-top">
                        <span className="detail-category">{project.category}</span>
                        <span className="detail-separator">/</span>
                        <span className="detail-year">{project.year}</span>
                    </div>
                    <h1 className="detail-title">{project.title}</h1>
                    <p className="detail-description">{project.description}</p>
                    <div className="detail-tags">
                        {project.tags.map((tag, index) => (
                            <span key={`tag-${project.id}-${index}`} className="detail-tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>

                {/* ✅ 메인 이미지 */}
                {project?.images?.length > 0 && (
                    <div className="detail-main-image">
                        <img
                            src={project.images[0]?.url || project.thumbnail || '/assets/images/placeholder.jpg'}
                            alt={project.title}
                            onError={(e) => {
                                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmN2ZjIiByeD0iMTIiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjNmM3ODhmIiBmb250LXdlaWdodD0iNjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UHJvamVjdCBJbWFnZTwvdGV4dD48L3N2Zz4=';
                                e.target.onerror = null;
                            }}
                        />
                    </div>
                )}

                {project.images.length > 1 && (
                <section className="detail-section">
                    <h2>갤러리</h2>
                    <div className="detail-gallery">
                        {project.images.slice(1).map((img, index) => {
                            // 🔧 실제 파일 존재 여부 확인 + fallback
                            const imgUrl = (typeof img === 'string' ? img : img.url)?.toLowerCase();
                            const safeUrl = imgUrl || project.thumbnail || '/assets/images/placeholder.jpg';
                            
                            return (
                                <img
                                    key={`gallery-${project.id}-${index}`}
                                    src={safeUrl}
                                    alt={`${project.title} ${index + 2}`}
                                    className="detail-gallery-img"
                                    loading="lazy"
                                    onError={(e) => {
                                        // 🔧 SVG 플레이스홀더 + 재시도 방지
                                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIgcm09IjgiLz48L3N2Zz4=';
                                        e.target.onerror = null;
                                        e.target.style.opacity = '1';
                                    }}
                                />
                            );
                        })}
                    </div>
                </section>
                )}

                {/* 프로젝트 정보 */}
                <section className="detail-section">
                    <h2>프로젝트 정보</h2>
                    <div className="detail-text">
                        <p><strong>클라이언트:</strong> {project.client || '비공개'}</p>
                        <p><strong>역할:</strong> {project.role || '디자인'}</p>
                        <p><strong>기간:</strong> {project.duration || '미정'}</p>
                    </div>
                </section>

                {/* ✅ 참고 섹션 (뉴스레터 카테고리 전용) */}
                {project.category === 'newsletter' && project.id !== '100' && (
                    <section className="detail-section detail-reference">
                        <h2>참고</h2>
                        <div className="reference-card glass" onClick={() => navigate('/portfolio/100')}>
                            <div className="reference-info">
                                <span className="ref-label">사보 뉴스레터 가이드</span>
                                <h3 className="ref-title">윤리레터 사보 소개 (참고)</h3>
                            </div>
                            <svg className="ref-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </div>
                    </section>
                )}

                {/* 하단 버튼 */}
                <footer className="detail-footer">
                    <button onClick={() => navigate('/work')} className="btn-list">
                        목록으로 돌아가기
                    </button>
                </footer>

                
            </div>
        </article>
    );
}