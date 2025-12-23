    export const getImageUrl = (imagePath) => {
    if (typeof imagePath !== 'string' || !imagePath.trim()) {
        return `${import.meta.env.BASE_URL}assets/images/100.jpg`;
    }
    
    // 이미 절대 경로(/로 시작)면 BASE_URL만 앞에 붙여줌
    if (imagePath.startsWith('/')) {
        return `${import.meta.env.BASE_URL}${imagePath.slice(1)}`;
    }

    // public/assets/images/ 
    return `${import.meta.env.BASE_URL}assets/images/${imagePath}`;
    };