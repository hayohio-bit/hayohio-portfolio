import './HeroPlanet.css';
import React, { useEffect, useRef, useState } from 'react';

const BADGECONFIG = [
    {
        id: 'experience',
        label: 'In-house Design 5+',
        angleOffset: 20,
        orbitRadius: 105,
    },
    {
        id: 'skills',
        label: 'Newsletter Campaign Collateral',
        angleOffset: 200,
        orbitRadius: 135,
    },
];

export default function HeroPlanet() {
    const containerRef = useRef(null);
    const [time, setTime] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const lastTimeRef = useRef(Date.now());

    useEffect(() => {
        let frameId;
        const update = () => {
            const now = Date.now();
            const delta = (now - lastTimeRef.current) * 0.001;
            lastTimeRef.current = now;

            if (isHovered) {
                setTime(prev => prev + delta);
            }
            frameId = requestAnimationFrame(update);
        };
        frameId = requestAnimationFrame(update);
        return () => cancelAnimationFrame(frameId);
    }, [isHovered]);

    return (
        <div 
            className="planet-orbit-wrapper" 
            ref={containerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="planet-ring" />
            <div className={`planet-core ${isHovered ? 'is-spinning' : ''}`} />
            
            {BADGECONFIG.map((badge) => {
                const baseRotationSpeed = 1 / 10; 
                const angle = (time * baseRotationSpeed * 360 + badge.angleOffset) * (Math.PI / 180);
                
                const orbitX = Math.cos(angle) * badge.orbitRadius;
                const orbitY = Math.sin(angle) * badge.orbitRadius;

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
