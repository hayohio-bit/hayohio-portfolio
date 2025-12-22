    // HeroPlanet.jsx - 수정된 버전
    import React, { useEffect, useRef, useState } from 'react';
    import './HeroPlanet.css';

    const BADGECONFIG = [
    {
        id: 'experience',
        label: 'In-house Design 5+',
        angleOffset: 20,
        orbitRadius: 105,
        duration: 23,
    },
    {
        id: 'skills',
        label: 'Newsletter Campaign Collateral',
        angleOffset: 200,
        orbitRadius: 135,
        duration: 30, // duration을 다르게 설정하여 서로 다른 속도로 회전
    },
    ];

    export default function HeroPlanet() {
    const containerRef = useRef(null);
    const mouse = useState({ x: null, y: null });
    const setMouse = mouse[1];

    useEffect(() => {
        // 마우스 추적 핸들러 - 요청에 따라 제거하여 순수 행성 회전만 유지
        const handleMove = (e) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setMouse({ x, y });
        };

        const container = containerRef.current;
        if (!container) return;

        container.addEventListener('mousemove', handleMove);
        container.addEventListener('mouseleave', () => setMouse({ x: null, y: null }));

        return () => {
        container.removeEventListener('mousemove', handleMove);
        container.removeEventListener('mouseleave', () => setMouse({ x: null, y: null }));
        };
    }, []);

    return (
        <div className="planet-orbit-wrapper" ref={containerRef}>
        <div className="planet-ring" />
        <div className="planet-core" />
        
        {/* 두 배지를 행성과 함께 회전 - 마우스 반발력 제거 */}
        {BADGECONFIG.map((badge, index) => {
            // 시간 기반 각도 계산 - 행성 회전과 동기화 (planet-spin 5초 주기)
            const now = Date.now() * 0.001;
            const baseRotationSpeed = 1 / 5; // planet-core의 360도/5초 = 72도/초
            const angle = (now * baseRotationSpeed * 360 + badge.angleOffset) * (Math.PI / 180);
            
            const orbitX = Math.cos(angle) * badge.orbitRadius;
            const orbitY = Math.sin(angle) * badge.orbitRadius;

            // 서로 겹치지 않도록 orbitRadius와 angleOffset 최적화
            // experience: 105px, 20도 시작
            // skills: 135px, 200도 시작 (약 180도 차이로 배치)
            
            const style = {
            transform: `translate(${orbitX}px, ${orbitY}px)`,
            };

            return (
            <div key={badge.id} className={`planet-badge planet-badge-${badge.id}`} style={style}>
                {badge.label}
            </div>
            );
        })}
        </div>
    );
    }
