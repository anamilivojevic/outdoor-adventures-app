/* import { MdKeyboardDoubleArrowRight } from "react-icons/md";
<MdKeyboardDoubleArrowRight className="ms-1" />; */
const ActivitySwiperItem = ({ activity }: ActivityProps): JSX.Element => {
  return (
    <>
      <div className="card-img-wrapper">
        <img
          src={require(`../resources/images/${activity.imgFileName}`)}
          alt={`Image of ${activity.name}`}
          className="card-img-top"
        />
      </div>
      <div className="card-body d-flex flex-column justify-content-between">
        <div className="mb-2">
          <h5 className="card-title mb-3 text-uppercase">{activity.name}</h5>
          <p className="card-text c-text-small">{activity.description}</p>
        </div>
        <div>
          <p className="card-text">
            <a
              className="text-uppercase text-decoration-none c-text-wine fs-6 d-flex align-items-center"
              href="#">
              Locations
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ActivitySwiperItem;
