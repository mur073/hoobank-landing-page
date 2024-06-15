import './about.css';

import { quotes } from '../../assets';
import { about } from '../../constants';
import PropTypes from 'prop-types';

const About = () => {
  return (
    <section className="about section__padding" id="about">
      <div className="about__headings">
        <h2>What people are saying about us</h2>
        <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>

      <div className="about__container">
        {about.map((item) => (
          <AboutCard key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
};

const AboutCard = ({ text, img, name, post }) => (
  <div className="about__container-item">
    <img src={quotes} alt="quotes" />
    <p>{text}</p>
    <div className="about__container-item_person">
      <img src={img} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{post}</p>
      </div>
    </div>
  </div>
);

AboutCard.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
};

export default About;
