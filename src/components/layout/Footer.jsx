import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-logo">Portfolio</h3>
                        <p className="footer-tagline">
                            React 기반 디자인 포트폴리오를 반응형 갤러리로 카탈로그화한 아카이브 사이트
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Contact</h4>
                        <ul className="footer-links">
                            <li>
                                <a href="mailto:hayohio@gmail.com" className="footer-link">
                                    hayohio@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/hayohio-bit" target="_blank" rel="noopener noreferrer" className="footer-link">
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Navigation</h4>
                        <ul className="footer-links">
                            <li><a href="/" className="footer-link">Home</a></li>
                            <li><a href="/about" className="footer-link">About</a></li>
                            <li><a href="/work" className="footer-link">Work</a></li>
                            <li><a href="/contact" className="footer-link">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} hayohio. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;