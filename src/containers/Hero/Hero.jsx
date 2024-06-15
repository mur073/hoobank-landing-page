import './hero.css';
import { discount } from '../../assets/index';
import { GetStarted } from '../../components/index';
import { robot } from '../../assets/index';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        <div className="hero__discount bg-dark-gradient">
          <img src={discount} alt="discount" />
          <p>
            <span>20%</span> DISCOUNT FOR <span>1 MONTH</span> ACCOUNT
          </p>
        </div>
        <div className="hero__heading">
          <div>
            <h1>
              The Next
              <br />
              <span className="text-blue-gradient">Generation</span>
            </h1>
            <GetStarted />
          </div>
          <div>
            <h1>Payment Method.</h1>
          </div>
        </div>

        <p className="hero__text">
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine
          annual percentage rates, annual fees.
        </p>
      </div>
      <div className="hero__img">
        <img src={robot} alt="robot" />
      </div>

      <div className="get-started-mobile">
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
