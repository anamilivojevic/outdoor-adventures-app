import ActivitySwiperItem from "./ActivitySwiperItem";
import "./ActivitySwiper.scss";

const ActivitySwiper = ({ activities }: ActivitiesProps): JSX.Element => {
  // row overflow-auto flex-row flex-nowrap align-items-stretch gap-3
  return (
    <div className="row align-items-stretch">
      {activities.map((el) => {
        return (
          <div
            key={el.id}
            className="col-12 col-md-6 col-lg-4 mb-3 d-flex align-items-stretch">
            <div className="card mb-3 c-text-dark-green c-bg-beige">
              <ActivitySwiperItem activity={el} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ActivitySwiper;
