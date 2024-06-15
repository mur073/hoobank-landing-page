import './billing.css';
import { bill, google, apple } from '../../assets';

const Billing = () => {
  return (
    <section className="billing section__padding">
      <div className="billing__img">
        <img src={bill} alt="bill" />
      </div>
      <div className="billing__container">
        <h2>Easily control your billing & invoicing.</h2>
        <p>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus
          aliporttitor integer platea placerat.
        </p>

        <div className="billing__container-icons">
          <img src={google} alt="play market icon" />
          <img src={apple} alt="app store icon" />
        </div>
      </div>
    </section>
  );
};

export default Billing;
