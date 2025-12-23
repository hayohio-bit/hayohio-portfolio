import portfolioData from './portfolioData.json'

// 🔧 이미지 경로 수정 헬퍼 함수
const fixPath = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;

    // BASE_URL은 컴포넌트 레벨에서 getImageUrl을 통해 붙이도록 변경
    // 여기서는 데이터의 순수 경로만 유지 (앞의 /는 제거)
    return path.startsWith('/') ? path.slice(1) : path;
};

export const getAllProjects = () => {
    return (portfolioData.portfolios || [])
        .filter(p => p.status === 'published' && !p.isReference)
        .map(p => ({
            ...p,
            thumbnail: fixPath(p.thumbnail),
            images: p.images.map(fixPath)
        }));
};

export const getCategories = () => {
    const categories = portfolioData.categories || [];
    const categoryList = categories.filter(cat => cat.id !== 'all');

    return [
        { id: 'all', label: '전체', color: '#95a5a6' },
        ...categoryList.map(cat => ({
            id: cat.id,
            label: cat.label,
            color: cat.color || '#95a5a6'
        }))
    ];
};

export const getFeaturedProjects = () => {
    return getAllProjects()
        .filter(p => p.status === 'published')
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 6)
        .map(project => ({
            id: project.id,
            title: project.title,
            year: project.year,
            category: project.category,
            description: project.description,
            images: project.images.map(img => ({ url: img })), // 이미지가 이미 fixPath 처리됨
            tags: project.tools || []
        }));
};

export const getProjectById = (id) => {
    // 🔧 문자열/숫자 모두 처리
    const project = getAllProjects().find(p => p.id == id);
    if (!project) return null;

    return {
        ...project,
        images: project.images.map(img => ({
            url: img,  // 이미 fixPath 처리됨
            alt: project.title
        })),
        tags: Array.isArray(project.tools) ? project.tools : [],
        thumbnail: project.thumbnail || project.images[0] || fixPath('/assets/images/default-placeholder.jpg')
    };
};