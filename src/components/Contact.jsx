import React from 'react';

const Contact = () => {
  const contactInfo = {
    phone: "+216 52127818",
    email: "haj.saad.lamiss@gmail.com",
    email2: "lamis.benhajsaad@issatso.u-sousse.tn",
    location: "Tunisia",
    github: "github.com/Lamis-haj-saad",
    linkedin: "linkedin.com/in/lamis-ben-haj-saad/"
  };

  return (
    <div className="section" id="contact">
      <div className="section-label">// contact</div>
      <h2 className="section-title">Let's Work Together</h2>
      <div className="contact-wrap">
        <div>
          <div className="contact-info-title">Open to new projects</div>
          <p className="contact-info-text">
            Whether you have a data challenge to solve, an AI project in mind,
            or just want to connect — my inbox is always open.
          </p>
          <div className="contact-detail">
            <span>✆</span> {contactInfo.phone}
          </div>
          <div className="contact-detail">
            <span>✉</span> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email} (Primary)</a>
          </div>
          <div className="contact-detail">
            <span>✉</span> <a href={`mailto:${contactInfo.email2}`}>{contactInfo.email2}</a>
          </div>
          <div className="contact-detail">
            <span>⌂</span> {contactInfo.location}
          </div>
          <div className="contact-detail">
            <span>⌥</span> <a href={`https://${contactInfo.github}`} target="_blank" rel="noopener noreferrer">{contactInfo.github}</a>
          </div>
          <div className="contact-detail">
            <span>in</span> <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer">{contactInfo.linkedin}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;