import './Detail.css';
import { getProjectById } from '../../data/projectUtils';
import { getImageUrl } from '../../utils/imageUtils';
import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect, useState, useCallback } from 'react';

export default function Detail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = getProjectById(id);
    // 17차 피드백: URL 대신 인덱스로 상태 관리 변경
    const [currentImgIndex, setCurrentImgIndex] = useState(null);
    // 35차 피드백: 하이퍼-센시티브 2단계 줌 (false: Smart Height, true: Wide Detail)
    const [isZoomed, setIsZoomed] = useState(false);
    // 19차 피드백: 스크롤 위치 제어를 위한 Ref
    const lightboxOverlayRef = React.useRef(null);

    const openLightbox = (index) => {
        setCurrentImgIndex(index);
        setIsZoomed(false); // 오픈 시 초기 상태 (세로 최적화)
        document.body.style.overflow = 'hidden'; 
    };

    const closeLightbox = () => {
        setCurrentImgIndex(null);
        setIsZoomed(false);
        document.body.style.overflow = 'auto'; 
    };

    const toggleZoom = (e) => {
        if (e) e.stopPropagation();
        // 35차: 세로 최적화 <-> 가로 디테일 간의 심플한 토글
        const nextZoomState = !isZoomed;
        setIsZoomed(nextZoomState);
        
        // 줌 전환 시 스크롤 상단으로 초기화
        if (lightboxOverlayRef.current) {
            lightboxOverlayRef.current.scrollTop = 0;
        }
    };

    // 17차 피드백: 이전/다음 내비게이션 로직
    const nextImage = useCallback((e) => {
        if (e) e.stopPropagation();
        if (!project?.images) return;
        setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
        setIsZoomed(false); // 이미지 전환 시 초기 상태로
        if (lightboxOverlayRef.current) lightboxOverlayRef.current.scrollTop = 0;
    }, [project]);

    const prevImage = useCallback((e) => {
        if (e) e.stopPropagation();
        if (!project?.images) return;
        setCurrentImgIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
        setIsZoomed(false); // 이미지 전환 시 초기 상태로
        if (lightboxOverlayRef.current) lightboxOverlayRef.current.scrollTop = 0;
    }, [project]);

    // 키보드 내비게이션 지원
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (currentImgIndex === null) return;
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentImgIndex, nextImage, prevImage]);

    useEffect(() => {
        if (!project) navigate('/work', { replace: true });
        return () => { document.body.style.overflow = 'auto'; };
    }, [project, navigate]);

    if (!project) {
        return <div className="detail-not-found"><p>로딩 중...</p></div>;
    }

    return (
        <article className="detail-page">
            <div className="detail-bg-glow"></div>
            <div className="detail-bg-mesh"></div>

            <div className="detail-inner">
                {/* 헤더 (타이틀 및 리드) */}
                <header className="detail-header reveal" style={{ animationDelay: '0.1s' }}>
                    <div className="detail-category-badge">
                        <span>{project.category}</span>
                    </div>
                    <h1 className="detail-title gradient-text">{project.title}</h1>
                    <p className="detail-lead">{project.description}</p>
                </header>

                {/* 메타 정보 그리드 (최상단) */}
                <div className="detail-meta-top-wrap reveal glass-premium" style={{ animationDelay: '0.2s' }}>
                    <div className="detail-meta-grid">
                        <div className="meta-item">
                            <div className="meta-icon">🏢</div>
                            <div className="meta-content">
                                <span className="meta-label">Organization</span>
                                <span className="meta-value">{project.client || 'In-house Lab'}</span>
                            </div>
                        </div>
                        <div className="meta-item">
                            <div className="meta-icon">🎯</div>
                            <div className="meta-content">
                                <span className="meta-label">Mission</span>
                                <span className="meta-value">{project.role || 'Strategic Design'}</span>
                            </div>
                        </div>
                        <div className="meta-item">
                            <div className="meta-icon">⏱️</div>
                            <div className="meta-content">
                                <span className="meta-label">Duration</span>
                                <span className="meta-value">{project.duration || 'N/A'}</span>
                            </div>
                        </div>
                        <div className="meta-item">
                            <div className="meta-icon">💻</div>
                            <div className="meta-content">
                                <span className="meta-label">Stack</span>
                                <div className="meta-tags">
                                    {(project.tags || []).map((tag, i) => (
                                        <span key={i} className="meta-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 메인 레이아웃 (2컬럼: 사진 좌 / 설명 우) */}
                <div className="detail-content-layout reveal" style={{ animationDelay: '0.3s' }}>
                    {/* 좌측: 다이나믹 이미지 그리드 (17차: 인덱스로 오픈) */}
                    <div className={`detail-content-left image-count-${project.images.length}`}>
                        {project?.images?.map((img, index) => {
                            const imgUrl = getImageUrl(typeof img === 'string' ? img : img.url);
                            return (
                                <div 
                                    key={index} 
                                    className={`detail-image-item glass-hover item-${index + 1}`}
                                    onClick={() => openLightbox(index)}
                                >
                                    <img
                                        src={imgUrl}
                                        alt={`${project.title} archive ${index + 1}`}
                                        loading={index === 0 ? "eager" : "lazy"}
                                        onLoad={(e) => e.target.classList.add('loaded')}
                                        onError={(e) => {
                                            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmN2ZjIiByeD0iMTIiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjNmM3ODhmIiBmb250LXdlaWdodD0iNjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UHJvamVjdCBJbWFnZTwvdGV4dD48L3N2Zz4=';
                                            e.target.onerror = null;
                                        }}
                                    />
                                    {index === 0 && project.images.length === 1 && <div className="zoom-hint">Click to enlarge</div>}
                                </div>
                            );
                        })}
                    </div>

                    {/* 우측: 상세 설명 및 임팩트 */}
                    <div className="detail-content-right">
                        <section className="detail-info-group glass-premium">
                            <div className="detail-section-item">
                                <h2 className="section-title-small">Project Insight</h2>
                                <p className="section-text">{project.objective || '사내 비즈니스 목표 달성을 위한 최적의 디자인 솔루션을 도출했습니다.'}</p>
                            </div>
                            
                            <div className="detail-section-item">
                                <h2 className="section-title-small">Key Features</h2>
                                <ul className="section-list">
                                    {(project.features || []).map((f, i) => (
                                        <li key={i}>{f}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="detail-section-item impact-item">
                                <h2 className="section-title-small">Impact & Outcome</h2>
                                <p className="impact-text">{project.outcome || '성공적인 사내 배포 및 긍정적인 평가를 이끌어냈습니다.'}</p>
                            </div>
                        </section>
                    </div>
                </div>

                {/* 하단 버튼 */}
                <footer className="detail-footer reveal" style={{ animationDelay: '0.4s' }}>
                    <button onClick={() => navigate('/work')} className="btn-back-prime">
                        <span className="btn-back-text">Back to Portfolio</span>
                        <div className="btn-back-bg"></div>
                    </button>
                </footer>
            </div>

            {/* 17/18/19/35차 피드백: 이미지 내비게이션 및 하이퍼-센시티브 2-스테이지 줌 라이트박스 */}
            {currentImgIndex !== null && (
                <div 
                    className={`lightbox-overlay ${isZoomed ? 'zoomed' : ''}`} 
                    onClick={closeLightbox}
                    ref={lightboxOverlayRef}
                >
                    <button className="lightbox-close" onClick={closeLightbox}>✕</button>
                    
                    {/* 내비게이션 버튼 - 이미지 2장 이상일 때만 노출 */}
                    {project.images.length > 1 && (
                        <>
                            <button className="lightbox-nav-btn prev" onClick={prevImage}>
                                <span>⟨</span>
                            </button>
                            <button className="lightbox-nav-btn next" onClick={nextImage}>
                                <span>⟩</span>
                            </button>
                        </>
                    )}

                    <div className="lightbox-content">
                        <div className="lightbox-image-wrap" onClick={toggleZoom}>
                            <img 
                                src={getImageUrl(typeof project.images[currentImgIndex] === 'string' ? project.images[currentImgIndex] : project.images[currentImgIndex].url)} 
                                alt={`Large view ${currentImgIndex + 1}`} 
                                className={isZoomed ? 'img-zoomed' : 'img-fit'}
                            />
                        </div>
                    </div>
                </div>
            )}
        </article>
    );
}