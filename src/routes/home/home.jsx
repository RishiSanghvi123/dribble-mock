import HireMe from "../../components/hireMe/hireMe";
import Onboarding from "../../components/onboarding/onboarding";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Onboarding />
      <HireMe />
    </Fragment>
  );
};

export default Home;
