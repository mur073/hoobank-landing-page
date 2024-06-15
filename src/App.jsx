import { Navbar, Stats, Companies, CTA } from './components/index';
import { Features, Hero, Billing, CardDeal, About, Footer } from './containers/index';

const App = () => {
  return (
    <div className="bg-primary">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Billing />
      <CardDeal />
      <About />
      <Companies />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
