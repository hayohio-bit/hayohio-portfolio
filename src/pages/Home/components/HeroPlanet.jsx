import './HeroPlanet.css';
import React from 'react';

export default function HeroPlanet() {
    return (
        <div className="planet-orbit-wrapper">
            <div className="planet-ring" />
            <div className="planet-core" />

            <div className="planet-badge planet-badge-experience">
                In-house Design 5+
            </div>
            <div className="planet-badge planet-badge-skills">
                Newsletter Campaign Collateral
            </div>
        </div>
    );
}
