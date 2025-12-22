import React from 'react';
import './Contact.css';

export default function Contact() {
  const contactInfo = [
    {
      icon: '✉️',
      label: 'Email',
      value: 'hayohio@gmail.com',
      link: 'mailto:hayohio@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '010-6439-5201',
      link: 'tel:010-6439-5201'
    },
    {
      icon: '💼',
      label: 'GitHub',
      value: 'github.com/hayohio',
      link: 'https://github.com/hayohio-bit'
    }
  ];

  return (
    <section className="contact-page">
      <div className="contact-inner">
        <header className="contact-hero">
          <h1>Get In Touch</h1>
          <p className="contact-lead">
            프로젝트 협업이나 문의사항이 있으시면 언제든 연락주세요. <br />
            포트폴리오와 관련된 질문도 환영합니다.
          </p>
        </header>

        <div className="contact-content">
          <div className="contact-cards">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="contact-card"
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <div className="contact-card-icon">{item.icon}</div>
                <div className="contact-card-content">
                  <h3 className="contact-card-label">{item.label}</h3>
                  <p className="contact-card-value">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="contact-message">
            <div className="contact-message-box">
              <h2>연락 가능 시간</h2>
              <p>평일 오전 9시 - 오후 6시</p>
              <p className="contact-response-time">
                이메일로 보내주시면 24시간 이내에 답변드리겠습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
