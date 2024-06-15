import './getstarted.css';
import { arrowUp } from '../../assets/index';

const GetStarted = () => (
  <div className="get-started bg-blue-gradient">
    <div className="bg-primary">
      <p className="text-blue-gradient">
        Get
        <img src={arrowUp} alt="arrow up" />
        <br />
        Started
      </p>
    </div>
  </div>
);

export default GetStarted;
