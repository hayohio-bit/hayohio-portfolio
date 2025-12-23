import './ScrollButtons.css';
import { useState, useEffect } from 'react';

/**
 * ScrollButtons 컴포넌트
 * 페이지 최상단/최하단으로 이동하는 고정 버튼을 제공합니다.
 * 스크롤 위치에 따라 버튼 표시 여부를 조절합니다.
 */
function ScrollButtons() {
  // 버튼 표시 여부를 관리하는 state
    const [isVisible, setIsVisible] = useState(false);

    // 스크롤 위치를 감지하여 버튼 표시 여부 결정
    useEffect(() => {
        const toggleVisibility = () => {
        // 스크롤 위치가 300px 이상일 때 버튼 표시
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
        };

        // 스크롤 이벤트 리스너 등록
        window.addEventListener('scroll', toggleVisibility);

        // 컴포넌트 언마운트 시 이벤트 리스너 제거 (메모리 누수 방지)
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []); // 빈 의존성 배열: 컴포넌트 마운트 시 한 번만 실행

    /**
     * 페이지 최상단으로 부드럽게 스크롤
     */
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth' // 부드러운 스크롤 애니메이션
        });
    };

    /**
     * 페이지 최하단으로 부드럽게 스크롤
     */
    const scrollToBottom = () => {
        window.scrollTo({
        top: document.documentElement.scrollHeight, // 문서의 전체 높이
        behavior: 'smooth'
        });
    };

    return (
        <>
        {/* 스크롤 위치가 300px 이상일 때만 버튼 표시 */}
        {isVisible && (
            <div className="scroll-buttons">
            {/* 최상단 이동 버튼 */}
            <button
                onClick={scrollToTop}
                className="scroll-button scroll-top"
                aria-label="페이지 최상단으로 이동"
                title="맨 위로"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
            </button>

            {/* 최하단 이동 버튼 */}
            <button
                onClick={scrollToBottom}
                className="scroll-button scroll-bottom"
                aria-label="페이지 최하단으로 이동"
                title="맨 아래로"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>
            </div>
        )}
        </>
    );
    }

export default ScrollButtons;
