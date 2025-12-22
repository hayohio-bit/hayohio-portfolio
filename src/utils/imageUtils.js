    export const getImageUrl = (imagePath) => {
    if (typeof imagePath !== 'string' || !imagePath.trim()) {
        return '/assets/images/100.jpg';
    }
    
    if (imagePath.startsWith('/')) {
        return imagePath;
    }
    // public 폴더 이미지 처리
    return `/assets/images/${imagePath}`;
    }