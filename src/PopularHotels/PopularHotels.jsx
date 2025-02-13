import hotel1 from "../assets/images/hotel1.jpg";
import hotel2 from "../assets/images/hotel2.jpg";
import hotel3 from "../assets/images/hotel3.jpg";
import hotel4 from "../assets/images/hotel4.jpg";
import "./PopularHotels.css"
export default function PopularHotels() {
  return (
    <div className="popular__hotels mt-5 mb-5">
      <h2 className="display-6 mb-5">Popular Hotels</h2>
      <div className="row me-0 ps-0">
        {/* Hotel 1 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card h-100 border-0">
            <img src={hotel1} className="card-img-top img-fluid h-100 rounded-3" alt="Hotel 1" />
            <div className="card-body">
              <h4 className="card-title">Lakeside Motel Warefront</h4>
              <p className="card-text">2246 properties</p>
            </div>
          </div>
        </div>
        {/* Hotel 2 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card h-100 border-0">
            <img src={hotel2} className="card-img-top img-fluid h-100 rounded-3" alt="Hotel 2" />
            <div className="card-body">
              <h4 className="card-title">Recee Graham Resort</h4>
              <p className="card-text">1278 properties</p>
            </div>
          </div>
        </div>
        {/* Hotel 3 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card h-100 border-0">
            <img src={hotel3} className="card-img-top img-fluid h-100 rounded-3" alt="Hotel 3" />
            <div className="card-body">
              <h4 className="card-title">Fireside Dinners</h4>
              <p className="card-text">480 properties</p>
            </div>
          </div>
        </div>
        {/* Hotel 4 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card h-100 border-0">
            <img src={hotel4} className="card-img-top img-fluid h-100 rounded-3" alt="Hotel 4" />
            <div className="card-body">
              <h4 className="card-title">Oculus Inn Stay</h4>
              <p className="card-text">320 properties</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
