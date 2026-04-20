import React from 'react';

const Hero = () => {
  const NAME = "Lamis Ben Haj Saad";
  const TITLE = "Software Engineer · AI & Data Enthusiast";
  const BIO = "I build intelligent systems and data pipelines that turn raw information into insight. Passionate about machine learning, scalable architectures, and making AI accessible.";

  const firstName = NAME.split(' ')[0];
  const lastName = NAME.split(' ').slice(1).join(' ');

  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-tag">✦ Available for opportunities</div>
          <h1 className="hero-name">
            {firstName}<br />
            <span>{lastName}</span>
          </h1>
          <p className="hero-title">{TITLE}</p>
          <p className="hero-bio">{BIO}</p>
          <a href="/Images/Lamis_Ben_Haj_Saad_Resume.pdf" download className="hero-cta">
            Download my Resume (EN)
          </a>
          <a href="/Images/Lamis_Ben_Haj_Saad_CV.pdf" download className="hero-cta hero-cta-outline">
            Télécharger mon CV (FR)
          </a>
        </div>
        <div className="hero-photos">
          <div className="hero-photo photo-top">
            <img src="/Images/profile3.jpg" alt={NAME} />
          </div>
          <div className="hero-photo photo-bottom">
            <img src="/Images/profile2.jpg" alt={NAME} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;