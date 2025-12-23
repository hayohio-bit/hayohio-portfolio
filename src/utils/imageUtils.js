export const getImageUrl = (imagePath) => {
    // 1. 값이 없으면 기본 이미지
    if (!imagePath || typeof imagePath !== 'string' || !imagePath.trim()) {
        return `${import.meta.env.BASE_URL}assets/images/100.jpg`;
    }

    const path = imagePath.trim();
    const baseUrl = import.meta.env.BASE_URL || '/';

    // 2. 이미 외부 URL인 경우
    if (path.startsWith('http') || path.startsWith('data:')) {
        return path;
    }

    // 3. 이미 BASE_URL이 포함되어 있는지 확인
    if (baseUrl !== '/' && path.startsWith(baseUrl)) {
        return path;
    }

    // 4. 경로가 /로 시작하면 / 제거 (앞에 baseUrl을 붙이기 위해)
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // 5. 만약 cleanPath가 assets/images/로 시작하지 않는다면 붙여줌
    // (데이터에서 파일명만 온 경우를 대비)
    if (!cleanPath.startsWith('assets/') && !cleanPath.startsWith('images/')) {
        return `${baseUrl}assets/images/${cleanPath}`;
    }

    return `${baseUrl}${cleanPath}`;
};
