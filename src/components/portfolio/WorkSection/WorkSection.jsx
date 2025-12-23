import React, { useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '@utils/imageUtils';
import { getFeaturedProjects } from '../../../data/projectUtils';
import './WorkSection.css';

const WorkSection = React.memo(() => {
const featuredProjects = useMemo(
    () =>
    getFeaturedProjects().filter(
        (item) => item?.id && (item.title || item.description),
    ),
    [],
);

const getSafeImagePath = useCallback((item) => {
    const thumbnail = item?.thumbnail;
    if (thumbnail?.trim()) return thumbnail;

    const firstImage = item?.images?.[0];
    if (typeof firstImage === 'string' && firstImage.trim()) return firstImage;
    if (firstImage?.path?.trim()) return firstImage.path;
    if (firstImage?.url?.trim()) return firstImage.url;
    if (firstImage?.src?.trim()) return firstImage.src;

    return ''; // CSS 플레이스홀더 사용
}, []);

const handleImageError = useCallback((e) => {
    const img = e.target;
    img.src =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjRjMmMxIiByeD0iOCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qb3J0Zm9saW8gSW1hZ2U8L3RleHQ+PC9zdmc+';
    img.onerror = null;
    img.dataset.failed = 'true';
}, []);

const handleImageLoad = useCallback((e) => {
    e.target.onerror = null;
    e.target.dataset.loaded = 'true';
}, []);

const EmptyState = (
    <div className="work-empty" role="status" aria-live="polite">
    <div className="work-empty__content">
        <span className="work-empty__icon">📁</span>
        <p>포트폴리오 데이터를 준비 중입니다.</p>
        <p className="work-empty__sub">곧精彩한 작업들을 만나보세요!</p>
    </div>
    </div>
);

return (
    <section
    className="work-section"
    id="work"
    aria-label="선택된 대표 작업물"
    role="region"
    >
    <div className="work-header">
        <h2 className="work-header__title">Selected Work</h2>
        <p className="work-header__subtitle">
        실제 업무에서 진행했던 프로젝트 중, 대표적인 작업들을 정리했습니다.
        </p>
    </div>

    <div className="work-grid" role="list">
        {featuredProjects.length === 0 ? (
        EmptyState
        ) : (
        featuredProjects.map((item, index) => {
            const safeImagePath = getSafeImagePath(item);
            const imageSrc = safeImagePath ? getImageUrl(safeImagePath) : '';
            const categoryColor = item.categoryColor || '#007acc';

            return (
            <article
                key={`${item.id}-${index}`}
                className="work-card"
                role="listitem"
                aria-labelledby={`work-title-${item.id}`}
            >
                <Link
                to={`/portfolio/${item.id}`}
                className="work-card-link"
                title={`${
                    item.title || '프로젝트 상세보기'
                } - 클릭하여 전체 보기`}
                aria-label={`${item.title} 프로젝트 상세 페이지로 이동`}
                >
                <div className="work-thumb-wrap">
                    <img
                    src={imageSrc}
                    alt={`${item.title || '포트폴리오'} 대표 이미지`}
                    className="work-thumb"
                    loading={index < 4 ? 'eager' : 'lazy'}
                    width="400"
                    height="250"
                    onError={handleImageError}
                    onLoad={handleImageLoad}
                    decoding="async"
                    />
                    {console.log(imageSrc)}
                </div>

                <div className="work-card-body">
                    <div className="work-meta">
                    <span
                        className="work-category"
                        style={{ '--category-color': categoryColor }}
                    >
                        {item.category || 'Uncategorized'}
                    </span>
                    <span className="work-year">
                        {item.year || 'N/A'}
                    </span>
                    </div>

                    <h3
                    id={`work-title-${item.id}`}
                    className="work-card-title"
                    >
                    {item.title}
                    </h3>

                    <p className="work-card-summary">
                    {item.description?.substring(0, 120) ||
                        '프로젝트 설명이 없습니다.'}
                    {item.description?.length > 120 && '...'}
                    </p>

                    {Array.isArray(item.tags) && item.tags.length > 0 && (
                    <div className="work-tags">
                        {item.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="work-tag">
                            {tag}
                        </span>
                        ))}
                        {item.tags.length > 3 && (
                        <span className="work-tag work-tag--more">
                            +{item.tags.length - 3}
                        </span>
                        )}
                    </div>
                    )}
                </div>
                </Link>
            </article>
            );
        })
        )}
    </div>
    </section>
);
});

WorkSection.displayName = 'WorkSection';

export default WorkSection;
