import './Header.css';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@theme/useTheme';
import React from 'react';

const GITHUB_URL = 'https://github.com/hayohio-bit';
const EMAIL = 'mailto:hayohio@gmail.com';
const PHONE = 'tel:010-0000-0000';

export default function Header() {
    const { theme, toggleTheme } = useTheme();

    const getLinkClassName = ({ isActive }) =>
        `header-link${isActive ? ' header-link-active' : ''}`;

    const handleToggleTheme = () => {
        toggleTheme();
    };

    return (
        <header className="header">
            <div className="header-container">
            <NavLink to="/" className="header-logo logo-style-1">
            <span className="logo-main">Portfolio</span>
            <span className="logo-name">sunhayoung</span>
            </NavLink>




                <nav className="header-nav">
                    <NavLink to="/" className={getLinkClassName}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={getLinkClassName}>
                        About
                    </NavLink>
                    <NavLink to="/work" className={getLinkClassName}>
                        Work
                    </NavLink>
                    <NavLink to="/contact" className={getLinkClassName}>
                        Contact
                    </NavLink>
                </nav>

                <div className="header-actions">
                    <a
                        href={PHONE}
                        className="header-icon-link"
                        aria-label="Phone"
                    >
                        <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                            <path d="M1.885.511a1.745 1.745 0 012.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        </svg>
                    </a>
                    <a
                        href={EMAIL}
                        className="header-icon-link"
                        aria-label="Email"
                    >
                        <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                            <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5C0 2.784.784 2 1.75 2zM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809v6.442zm13-8.181v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81z" />
                        </svg>
                    </a>
                    <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="header-icon-link"
                        aria-label="GitHub"
                    >
                        <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </a>

                    <button
                        onClick={handleToggleTheme}
                        className="theme-toggle-btn"
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </div>
            </div>
        </header>
    );
}
