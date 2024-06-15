import './card_deal.css';
import { card } from '../../assets';
import { Button } from '../../components';

const CardDeal = () => {
  return (
    <section className="card-deal section__padding">
      <div className="card-deal__container">
        <h2>Find a better card deal in few easy steps.</h2>
        <p>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet
          ultrices ac, ametau.
        </p>

        <Button text="Get Started" />
      </div>

      <div className="card-deal__img">
        <img src={card} alt="bill" />
      </div>
    </section>
  );
};

export default CardDeal;
