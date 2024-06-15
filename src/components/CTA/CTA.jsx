import './cta.css';

import { Button } from '../../components';

const CTA = () => (
  <section className="cta section__margin bg-dark-gradient" id="solution">
    <div className="cta__headings">
      <h2>Let’s try our service now!</h2>
      <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    </div>

    <div className="cta__button">
      <Button text="Get Started" />
    </div>
  </section>
);

export default CTA;
