import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop 컴포넌트
 * 라우트 변경 시 스크롤 위치를 최상단으로 자동 이동합니다.
 * React Router의 useLocation 훅으로 경로 변경을 감지합니다.
 */
    function ScrollToTop() {
    // 현재 경로 정보 가져오기
    const { pathname } = useLocation();

    useEffect(() => {
        // 경로가 변경될 때마다 스크롤을 최상단으로 이동
        window.scrollTo(0, 0);
    }, [pathname]); // pathname 의존성 배열: 경로 변경 시에만 실행

    // UI를 렌더링하지 않는 컴포넌트
    return null;
    }

export default ScrollToTop;
