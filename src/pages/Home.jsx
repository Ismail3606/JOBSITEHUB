
import Category from "./Category";
import Jobs from "./Jobs";
import Footer from './Footer';
import Hero_sec from "./Hero_sec";

const Home = () => {
  return (
    <>
      <main>
        {/* -----hero-section----- */}
        <Hero_sec/>
        {/* -----categroy-section------ */}
        <Category />
        {/* -----featuredjob-section----- */}
        <Jobs />
        {/* -----footer-section----- */}
        <Footer/>
      </main>
    </>
  );
};

export default Home;
