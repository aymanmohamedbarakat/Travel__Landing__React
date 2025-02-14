import Australia from "../assets/images/Australia.jpg";
import Japan from "../assets/images/Japan.jpg";
import NewZealand from "../assets/images/New Zealand.jpg";
import Greece from "../assets/images/Greece.jpg";
import "./PopularDestinations.css"
export default function PopularDestinations() {
  return (
    <div className="popular__destinations">
      <div className=" mb-3">
        <h1 className="display-6 text-capitalize">Enjoy Your Dream Vacation</h1>
        <p className="lead">
          Plan and book your perfect trip with expert advice, travel tips,
          destination information, and inspiration from us.
        </p>
      </div>
      <div className="row me-0">
        {/* Australia */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card h-100 border-0">
            <img src={Australia} className="card-img-top rounded-3 " alt="..." />
            <div className="card-body ">
              <h3 className="card-title">Australia</h3>
              <p className="card-text">2246 properties</p>
            </div>
          </div>
        </div>
        {/* Japan */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card h-100 border-0">
            <img src={Japan} className="card-img-top rounded-3" alt="..." />
            <div className="card-body">
              <h3 className="card-title">Japan</h3>
              <p className="card-text">1278 properties</p>
            </div>
          </div>
        </div>
        {/* New Zealand */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card h-100 border-0">
            <img src={NewZealand} className="card-img-top rounded-3" alt="..." />
            <div className="card-body">
              <h3 className="card-title">New Zealand</h3>
              <p className="card-text">480 properties</p>
            </div>
          </div>
        </div>
        {/* Greece */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card h-100 border-0">
            <img src={Greece} className="card-img-top rounded-3 overflow-hidden custom__img" alt="..." />
            <div className="card-body">
              <h3 className="card-title">Greece</h3>
              <p className="card-text">320 properties</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
