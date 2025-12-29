import { Link } from 'react-router-dom';
import './Footer.css';
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    
                    <div className="footer-section">
                        <h3 className="footer-logo">Portfolio</h3>
                        <p className="footer-tagline">
                        React 기반 반응형 포트폴리오 아카이브입니다.{' '}<br/><br />
                        현재 Portfolio 상세 내용은 시연용 임시 데이터로, 
                        추후 실제 프로젝트로 업데이트 예정입니다.
                        <br /><br />
                        모든 콘텐츠의 저작권은 창작자(개발자)에게 있습니다.
                        </p>
                        <p className="footer-copyright">
                        © {currentYear} hayohio. All rights reserved.
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
                            <li><Link to="/" className="footer-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link></li>
                            <li><Link to="/about" className="footer-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About</Link></li>
                            <li><Link to="/work" className="footer-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Work</Link></li>
                            <li><Link to="/contact" className="footer-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;