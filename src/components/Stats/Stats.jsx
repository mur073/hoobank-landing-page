import './stats.css';
import { stats } from '../../constants/index';
import React from 'react';

const Stats = () => {
  return (
    <section className="stats section__padding">
      {stats.map((stat, index) => (
        <React.Fragment key={stat.text}>
          <div className="stats__item">
            <h2 className="stats__item-heading">{stat.heading}</h2>
            <p className="stats__item-text text-blue-gradient">{stat.text}</p>
          </div>
          {index !== stats.length - 1 && <div className="stats__splitter"></div>}
        </React.Fragment>
      ))}
    </section>
  );
};

export default Stats;
