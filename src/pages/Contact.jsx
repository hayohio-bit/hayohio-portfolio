import './Contact.css';
import React from 'react';

export default function Contact() {
  const contactInfo = [
    {
      icon: '✉️',
      label: 'Email',
      value: 'hayohio@gmail.com',
      link: 'mailto:hayohio@gmail.com'
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
      <div className="contact-bg-glow" />
      <div className="contact-inner">
        <header className="contact-hero reveal">
          <h1 className="text-gradient">Get In Touch</h1>
          <p className="contact-lead">
            프로젝트 협업이나 문의사항이 있으시면 언제든 연락주세요. <br />
            시각 언어로 조직의 가치를 설계하는 여정에 함께하겠습니다.
          </p>
        </header>

        <div className="contact-container">
          <div className="contact-cards grid">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="contact-card glass-premium reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <div className="contact-card-icon">{item.icon}</div>
                <div className="contact-card-info">
                  <span className="contact-card-label">{item.label}</span>
                  <p className="contact-card-value">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="contact-message-surface glass reveal" style={{ animationDelay: '0.4s' }}>
            <div className="contact-message-header">
              <div className="status-badge">Available Now</div>
              <h2>연락 가능 시간</h2>
            </div>
            <div className="contact-message-body">
              <p className="time-display">평일 09:00 - 18:00 (KST)</p>
              <div className="response-divider" />
              <p className="contact-response-text">
                이메일 문의 시 영업일 기준 24시간 이내에 <br />
                정교하고 상세한 답변을 드리겠습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
