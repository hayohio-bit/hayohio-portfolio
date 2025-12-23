export const getImageUrl = (imagePath) => {
// 1. 문자열이 아니거나 빈 값이면 기본 이미지로
if (typeof imagePath !== 'string' || !imagePath.trim()) {
    return `${import.meta.env.BASE_URL}assets/images/100.jpg`;
}

// 2. 이미 /로 시작하는 절대 경로라면 BASE_URL만 앞에 붙임
if (imagePath.startsWith('/')) {
    return `${import.meta.env.BASE_URL}${imagePath.slice(1)}`;
}

// 3. 그 외에는 모두 public/assets/images/ 아래의 파일명으로 간주
return `${import.meta.env.BASE_URL}assets/images/${imagePath}`;
};