import portfolioData from './portfolioData.json'



// 🔧 이미지 경로 수정 헬퍼 함수
const fixPath = (path) => {
    if (!path) return path;
    if (path.startsWith('http')) return path;
    // BASE_URL이 있으면 적용 (/로 시작하는 경로는 앞의 /제거 후 결합)
    const baseUrl = import.meta.env.BASE_URL || '/';
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    return baseUrl.endsWith('/')
        ? `${baseUrl}${cleanPath}`
        : `${baseUrl}/${cleanPath}`;
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

