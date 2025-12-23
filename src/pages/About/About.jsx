import './About.css';
import React from 'react';

export default function About() {
    return (
        <section className="about-page">
            <div className="about-inner">
                {/* Hero Section */}
                <header className="about-hero">
                    <h1>About</h1>
                    <p className="about-lead">
                        조직의 메시지를 시각 언어로 설계하는 커뮤니케이션 디자이너입니다.
                    </p>
                </header>

                {/* Experience Section */}
                <section className="about-section-full">
                    <h2 className="about-section-title">Experience</h2>
                    <div className="about-timeline">
                        <div className="about-timeline-item">
                            <div className="about-timeline-marker"></div>
                            <div className="about-timeline-content">
                                <div className="about-timeline-header">
                                    <h3 className="about-timeline-title">BGF리테일 Project개발팀</h3>
                                    <span className="about-timeline-period">2022.12 – 2025.02</span>
                                </div>
                                <p className="about-timeline-role">B2B 마케팅 디자인 및 사업 지원</p>
                                <p className="about-timeline-desc">
                                    B2B 영업을 위한 리플렛 제작과 상품 홍보물 디자인을 담당하
                                    상품설명회용 디스플레이 기획부터 실물 제작 전 과정을 관리했고,
                                    외부 제작사와의 커뮤니케이션을 주도했습니다.
                                </p>
                            </div>
                        </div>

                        <div className="about-timeline-item">
                            <div className="about-timeline-marker"></div>
                            <div className="about-timeline-content">
                                <div className="about-timeline-header">
                                    <h3 className="about-timeline-title">BGF 경영진단팀</h3>
                                    <span className="about-timeline-period">2018.02 – 2022.11</span>
                                </div>
                                <p className="about-timeline-role">윤리경영 커뮤니케이션 및 내부 감사 지원</p>
                                <p className="about-timeline-desc">
                                    윤리경영 콘텐츠 기획 및 캠페인 실행, 윤리레터 기획·발송,
                                    금품 등 수수 신고 물품 사내 경매 및 수익금 기부 진행,
                                    그룹웨어 게시판 관리와 내부 신고제도 운영 등 윤리경영 커뮤니케이션 전반을 담당했습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills & Expertise Grid */}
                <div className="about-grid">
                    <section className="about-section">
                        <h2 className="about-section-title">What I Do</h2>
                        <ul className="about-list">
                            <li>윤리경영·내부 커뮤니케이션을 위한 뉴스레터, 캠페인 콘텐츠 기획 및 디자인</li>
                            <li>B2B 영업 리플렛, 제안서용 시각 자료, 상품·서비스 홍보물 등 마케팅 자료 제작</li>
                            <li>윤리경영 관련 메시지를 이해하기 쉬운 문구와 시각 요소로 풀어내 임직원에게 전달</li>
                            <li>목적과 타깃에 맞는 커뮤니케이션 자료를 기획하고 제작</li>
                        </ul>
                    </section>

                    <section className="about-section">
                        <h2 className="about-section-title">Tools & Skills</h2>
                        <ul className="about-tags">
                            <li>Adobe Photoshop</li>
                            <li>Adobe Illustrator</li>
                            <li>Microsoft PowerPoint</li>
                            <li>HTML · CSS</li>
                        </ul>

                        <h2 className="about-section-title about-section-title-sub">Currently Learning</h2>
                        <ul className="about-tags">
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Java</li>
                        </ul>
                    </section>
                </div>
            </div>
        </section>
    );
}
