import ActivitySwiperItem from "./ActivitySwiperItem";
import "./ActivitySwiper.scss";
import { Carousel } from "react-bootstrap";

const ActivitySwiper = ({ activities }: ActivitiesProps): JSX.Element => {
  return (
    <div
      id="activity-swiper"
      className="row overflow-auto flex-row flex-nowrap align-items-stretch gap-3">
      {activities.map((el) => {
        return (
          <div
            className="col-12 col-md-6 col-lg-4 px-0 card h-100 c-text-dark-green c-bg-beige"
            key={el.id}>
            <ActivitySwiperItem activity={el} />
          </div>
        );
      })}
    </div>
  );
};

export default ActivitySwiper;
