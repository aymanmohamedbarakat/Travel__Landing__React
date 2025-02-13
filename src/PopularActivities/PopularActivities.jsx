import cruise from "../assets/images/cruise.png";
import museum from "../assets/images/museum.png";
import beachTours from "../assets/images/beachTours.png";
import city from "../assets/images/city.png";
import food from "../assets/images/food.png";
import hiking from "../assets/images/hiking.png";
import "./PopularActivities.css";

export default function PopularActivities() {
  return (
    <div className="popular__activities mb-5">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h2 className="display-6">Popular Things to Do</h2>
        <a href="#see-all" className="lead text-dark text-decoration-none d-none d=md-block">
          See all
        </a>
      </div>
      <div className="row g-3 me-0">
        {/* Activity 1 & 2 */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="Activity_1_2 d-flex flex-column gap-4">
            {/* Activity 1 */}
            <div className="Activity_1 activity-container h-100">
              <div className="image-wrapper">
                <img src={cruise} alt="cruise" className="activity-image" />
                <p className="activity-text">Cruises</p>
              </div>
            </div>

            {/* Activity 2 */}
            <div className="Activity_2 activity-container h-100">
              <div className="image-wrapper">
                <img src={museum} alt="museum" className="activity-image" />
                <p className="activity-text">Museum Tour</p>
              </div>
            </div>
          </div>
        </div>

        {/* Activity 3 */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="Activity_3 activity-container h-100">
              <div className="image-wrapper">
                <img src={beachTours} alt="beachTours" className="activity-image" />
                <p className="activity-text">Beach Tours</p>
            </div>
          </div>
        </div>

        {/* Activity 4, 5, & 6 */}
        <div className="col-12 col-md-12 col-lg-4">
          <div className="Activity_4_5_6 d-flex flex-column gap-4">
            {/* Activity 4 */}
            <div className="col-12 col-md-12">
                         <div className="Activity_4 activity-container ">
              <div className="image-wrapper">
                <img src={city} alt="city" className="activity-image" />
                <p className="activity-text">City Tours</p>
              </div>
            </div>
            </div>
 

            {/* Group Activity 5 & 6 */}
            <div className="GroupActivity d-flex flex-column flex-md-row">
              {/* Activity 5 */}
              <div className="col-12 col-md-6">
                <div className="Activity_5 activity-container h-100">
                  <div className="image-wrapper">
                    <img src={food} alt="food" className="activity-image" />
                    <p className="activity-text">Food</p>
                  </div>
                </div>
              </div>

              {/* Activity 6 */}
              <div className="col-12 col-md-6">
                <div className="Activity_6 activity-container h-100">
                  <div className="image-wrapper">
                    <img src={hiking} alt="hiking" className="activity-image overflow-hidden" />
                    <p className="activity-text">Hiking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}