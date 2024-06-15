import './features.css';
import PropTypes from 'prop-types';
import { Button } from '../../components';
import { features } from '../../constants';

const Business = () => {
  return (
    <section className="features section__padding" id="features">
      <div className="features__headings">
        <h2>You do the business, we’ll handle the money.</h2>
        <p>
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving
          money. But with hundreds of credit cards on the market.
        </p>
        <Button text="Get Started" />
      </div>

      <div className="feautures__container">
        {features.map((feature) => (
          <FeatureItem key={feature.title} img={feature.img} text={feature.text} title={feature.title} />
        ))}
      </div>
    </section>
  );
};

const FeatureItem = ({ img, title, text }) => {
  return (
    <div className="features__item">
      <div className="features__item-icon">
        <img src={img} alt={title} />
      </div>
      <div>
        <h2 className="features__item-heading">{title}</h2>
        <p className="features__item-text">{text}</p>
      </div>
    </div>
  );
};

FeatureItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Business;
