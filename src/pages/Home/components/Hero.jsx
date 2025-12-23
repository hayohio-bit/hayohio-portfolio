import { Link } from "react-router-dom";
import "./Hero.css";
import React from "react";
import HeroPlanet from "./HeroPlanet";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-inner">
                <div className="hero-copy">
                    <p className="hero-tagline">Visual Design Work Archive</p>

                    <h1 className="hero-title">
                        <span className="hero-break">
                            <span className="hero-text-small">조직의 </span>
                            <span className="hero-highlight">메시지</span>
                            <span className="hero-text-small">를</span>
                        </span>
                        <span className="hero-break">
                            <span className="hero-highlight">시각 언어</span>
                            <span className="hero-text-small">로 </span>
                            <span className="hero-highlight">설계</span>
                            <span className="hero-text-small">합니다</span>
                        </span>
                    </h1>

                    <p className="hero-description">
                        윤리경영 뉴스레터와 캠페인, B2B 영업 리플렛, 상품·서비스 홍보물 등
                        실제 업무에서 진행했던 디자인 작업들을 한 곳에 정리한
                        포트폴리오입니다. 이 사이트는 그동안의 작업을 정리하기 위해 직접
                        설계하고 구현한 포트폴리오입니다.
                    </p>

                    <div className="hero-actions">
                        <Link to="/work" className="btn btn-primary">
                            포트폴리오 보러가기
                        </Link>
                        <Link to="/about" className="btn btn-ghost">
                            이력 · 소개 살펴보기
                        </Link>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-visual-inner surface-card">
                        <HeroPlanet />
                    </div>
                </div>
            </div>
        </section>
    );
}
