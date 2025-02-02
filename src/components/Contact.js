import React, { useState } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaFacebook, FaTiktok, FaInstagram, FaTelegram, FaGithub } from 'react-icons/fa';

const ContactUs = () => {
  const [showPhoneLink, setShowPhoneLink] = useState(false);
  const [showWhatsappLink, setShowWhatsappLink] = useState(false);
  const [showEmailLink, setShowEmailLink] = useState(false);
  const [showFacebookLink, setShowFacebookLink] = useState(false);
  const [showFacebookGroupLink, setShowFacebookGroupLink] = useState(false);
  const [showTiktokLink, setShowTiktokLink] = useState(false);
  const [showInstagramLink, setShowInstagramLink] = useState(false);
  const [showTelegramLink, setShowTelegramLink] = useState(false);
  const [showGithubLink, setShowGithubLink] = useState(false);

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="contact-title">Let's Connect!</h1>
        <p className="contact-description">We’re here to help! Reach out to us through any of the following channels:</p>
      </div>

      <div className="contact-info">
        <div className="contact-list">
          <div className="contact-item" onClick={() => setShowPhoneLink(!showPhoneLink)}>
            <FaPhoneAlt className="contact-icon" />
            {showPhoneLink && <span className="contact-detail">Phone: 0716708732</span>}
          </div>
          <div className="contact-item" onClick={() => setShowWhatsappLink(!showWhatsappLink)}>
            <FaWhatsapp className="contact-icon" />
            {showWhatsappLink && <span className="contact-detail">WhatsApp: <a href="https://wa.me/263716708732" target="_blank" rel="noopener noreferrer">+263716708732</a></span>}
          </div>
          <div className="contact-item" onClick={() => setShowEmailLink(!showEmailLink)}>
            <FaEnvelope className="contact-icon" />
            {showEmailLink && <span className="contact-detail">Email: <a href="mailto:dnambarawani@gmail.com">dnambarawani@gmail.com</a></span>}
          </div>
          <div className="contact-item" onClick={() => setShowFacebookLink(!showFacebookLink)}>
            <FaFacebook className="contact-icon" />
            {showFacebookLink && <span className="contact-detail">Facebook: <a href="https://www.facebook.com/DominicNambarawani" target="_blank" rel="noopener noreferrer">Dominic Nambarawani</a></span>}
          </div>
          <div className="contact-item" onClick={() => setShowFacebookGroupLink(!showFacebookGroupLink)}>
            <FaFacebook className="contact-icon" />
            {showFacebookGroupLink && <span className="contact-detail">Facebook Group: <a href="https://www.facebook.com/groups/elitecreativeagency" target="_blank" rel="noopener noreferrer">Elite Creative Agency</a></span>}
          </div>
          <div className="contact-item" onClick={() => setShowTiktokLink(!showTiktokLink)}>
            <FaTiktok className="contact-icon" />
            {showTiktokLink && <span className="contact-detail">TikTok: <a href="https://www.tiktok.com/@flamelilly60" target="_blank" rel="noopener noreferrer">@flamelilly60</a></span>}
          </div>
          <div className="contact-item" onClick={() => setShowInstagramLink(!showInstagramLink)}>
            <FaInstagram className="contact-icon" />
            {showInstagramLink && <span className="contact-detail">Instagram: <a href="https://www.instagram.com/DominicNambarawani" target="_blank" rel="noopener noreferrer">Dominic Nambarawani</a></span>}
          </div>
          <div className="contact-item" onClick={() => setShowTelegramLink(!showTelegramLink)}>
            <FaTelegram className="contact-icon" />
            {showTelegramLink && <span className="contact-detail">Telegram: Dominic Abelo</span>}
          </div>
          <div className="contact-item" onClick={() => setShowGithubLink(!showGithubLink)}>
            <FaGithub className="contact-icon" />
            {showGithubLink && <span className="contact-detail">GitHub: <a href="https://github.com/dominic649" target="_blank" rel="noopener noreferrer">dominic649</a></span>}
          </div>
        </div>
      </div>

      <div className="contact-footer">
        <p>We’re always happy to help and answer any questions. Get in touch with us today!</p>
      </div>
    </div>
  );
};

export default ContactUs;
