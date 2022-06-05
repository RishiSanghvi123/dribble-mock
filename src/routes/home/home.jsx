import HireMe from "../../components/hireMe/hireMe";
import Onboarding from "../../components/onboarding/onboarding";
import { Fragment } from "react";
import Footer from "../../components/footer/footer";

const Home = () => {
  return (
    <Fragment>
      <Onboarding />
      <HireMe />
      <Footer />
    </Fragment>
  );
};

export default Home;
