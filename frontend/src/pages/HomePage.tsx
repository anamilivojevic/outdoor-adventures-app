import "./HomePage.scss";
import ActivityCarousel from "../components/ActivityCarousel";

const HomePage = (): JSX.Element => {
  return (
    <>
      <header>
        <div
          className="container-fluid d-flex bg-light bg-opacity-50"
          id="banner">
          <div className="container d-flex justify-content-center align-items-center">
            <h1 className="text-uppercase fw-normal text-center c-text-dark-green">
              Your next outdoor activity!
            </h1>
          </div>
        </div>
      </header>
      <main>
        <section id="description" className="my-4 my-xl-5">
          <div className="container px-lg-5">
            <div className="mb-4 py-3 px-lg-5">
              <div className="px-lg-5">
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
          </div>
        </section>
        <section id="suggested">
          <ActivityCarousel />
        </section>
      </main>
    </>
  );
};

export default HomePage;
