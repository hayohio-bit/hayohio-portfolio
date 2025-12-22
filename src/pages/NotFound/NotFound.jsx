import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
    return (
        <div className="notfound-page">
            <div className="notfound-container">
                <div className="notfound-content">
                    <div className="notfound-visual">
                        <h1 className="notfound-code">404</h1>
                        <div className="notfound-animation">
                            <div className="notfound-circle"></div>
                            <div className="notfound-circle"></div>
                            <div className="notfound-circle"></div>
                        </div>
                    </div>

                    <div className="notfound-text">
                        <h2>페이지를 찾을 수 없습니다</h2>
                        <p>
                            요청하신 페이지가 존재하지 않거나 이동되었습니다.<br />
                            주소를 다시 확인해주세요.
                        </p>

                        <div className="notfound-actions">
                            <Link to="/" className="btn btn-primary">
                                홈으로 돌아가기
                            </Link>
                            <Link to="/work" className="btn btn-secondary">
                                작업물 보기
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
