import './footer.css';

import { logo } from '../../assets';
import { footerLinks } from '../../constants';
import PropTypes from 'prop-types';

const Footer = () => (
  <section className="footer section__padding">
    <div className="footer__container">
      <div className="footer__container-logo">
        <img src={logo} alt="logo" />
        <p>A new way to make the payments easy, reliable and secure.</p>
      </div>
      <div className="footer__container-links">
        {footerLinks.map((footerLink) => (
          <FooterLink key={footerLink.title} {...footerLink} />
        ))}
      </div>
    </div>

    <div className="copyright">
      <p>2024 HooBank. All Rights Reserved.</p>
    </div>
  </section>
);

const FooterLink = ({ title, links }) => (
  <div>
    <h4>{title}</h4>
    {links.map((link) => (
      <p key={link}>{link}</p>
    ))}
  </div>
);

FooterLink.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
};

export default Footer;
