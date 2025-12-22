import portfolioData from './portfolioData.json'


    export const getAllProjects = () => {
    return (portfolioData.portfolios || []).filter(p => p.status === 'published' && !p.isReference);
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
        images: project.images.map(img => ({ url: img })),
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
        url: img, 
        alt: project.title 
        })),
        tags: Array.isArray(project.tools) ? project.tools : [],
        thumbnail: project.thumbnail || project.images[0] || '/assets/images/default-placeholder.jpg' 
    };
    };
