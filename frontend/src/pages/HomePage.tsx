import "./HomePage.scss";
import ActivitySwiper from "../components/ActivitySwiper";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

type customProps = {
  activities: Activity[];
  userLogged: number;
};

const HomePage = ({ activities, userLogged }: customProps): JSX.Element => {
  return (
    <>
      <header>
        <div
          className="container-fluid d-flex bg-light bg-opacity-50"
          id="banner">
          <div className="container d-flex justify-content-center align-items-center">
            <h1 className="text-uppercase text-center c-text-dark-green">
              Your next outdoor activity!
            </h1>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <section id="description" className="mt-4 c-large-mb">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                <h3 className="c-text-dark-green">
                  Explore our top ideas for all the outdoorsy people who are
                  craving adventures.
                </h3>
                <p>
                  If you're like me, you probably love spending a lot of time
                  outdoors — be it in a park, natural reserve or even in the
                  skies! However, I often get stuck when planning my next
                  adventure. That's where this guide comes in handy. Here you
                  can find many ideas for your next trip into the wild and find
                  amazing activities closeby. Happy exploring!
                </p>
              </div>
            </div>
          </section>
          <section id="suggested" className="c-large-mb">
            <h4 className="text-uppercase text-center mb-3">
              Popular activities
            </h4>
            <div className="container">
              <ActivitySwiper activities={activities} />
            </div>
          </section>
          <section id="explore-suggestions" className="c-large-mb">
            <div className="text-center ">
              <Link to="/search" className="fs-5">
                Search activities on a map
                <MdKeyboardDoubleArrowRight className="ms-2" />
              </Link>
            </div>
          </section>
          <section id="home-login" className="c-large-mb">
            <div className="text-center ">
              {userLogged > 0 ? (
                <Link to="/profile" className="fs-5">
                  See your profile
                  <FiLogIn className="ms-2" />
                </Link>
              ) : (
                <Link to="/login" className="fs-5">
                  Log in or create an account
                </Link>
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default HomePage;
