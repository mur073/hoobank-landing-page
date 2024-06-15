import './companies.css';

import { companies } from '../../constants';

const Companies = () => (
  <section className="companies section__padding">
    {companies.map((company) => (
      <img key={company.desc} src={company.img} alt={company.desc} />
    ))}
  </section>
);

export default Companies;
