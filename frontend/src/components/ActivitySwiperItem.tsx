import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const ActivitySwiperItem = ({ activity }: ActivityProps): JSX.Element => {
  return (
    <>
      <div className="card-img-wrapper mb-2">
        <img
          src={require(`../resources/images/${activity.imgFileName}`)}
          alt={`Image of ${activity.name}`}
          className="card-img-top"
        />
      </div>
      <div className="card-body py-3 d-flex flex-column justify-content-between">
        <div className="mb-3">
          <h5 className="card-title mb-3 text-uppercase">{activity.name}</h5>
          <p className="card-text c-text-small">{activity.description}</p>
        </div>
        <div>
          <p className="card-text">
            <Link
              className="text-uppercase text-decoration-none c-text-wine fs-6 d-flex align-items-center"
              to="/search">
              Locations
              <MdKeyboardDoubleArrowRight className="ms-1" />
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default ActivitySwiperItem;
