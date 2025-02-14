import "./Banner.css";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { LuSquareUserRound } from "react-icons/lu";
export default function Banner() {
  return (
    <div className="container banner p-0">
      <div className="banner__container d-flex justify-content-md-center justify-content-end align-items-md-center align-items-end position-relative">
        <div className="banner__content d-flex justify-content-md-center justify-content-end align-items-md-center align-items-end flex-column px-3 px-md-0">
          <h1 className="text-start text-md-center">
            Enjoy Your Dream Vacation
          </h1>
          <p className="text-start text-md-center mb-4 mb-md-0">
            Plan and book our perfect trip with expert advice, travel tips,
            destination information and inspiration from us
          </p>
        </div>
      </div>
      <div className="Travel__Booking">
        <div className="Travel__Booking__container col-12 shadow">
          <div className="row g-3">
            <div className="col-md-8 col-lg-3 col-12">
              <div className="input__group">
                <span className="input__group__text">
                  <CiLocationOn />
                </span>
                <input
                  type="text"
                  id="destination"
                  className="form-control"
                  placeholder="Where are you going?"
                />
              </div>
            </div>
            
            
          
            <div className="col-md-4 col-lg-3 col-12">
              <div className="input__group">
                <span className="input__group__text">
                <CiCalendar />
                </span>
                <input
                  type="date"
                  id="checkin"
                  className="form-control"
                  placeholder="Check-in date"
                />
              </div>
            </div> 
            <div className="col-md-4 col-lg-3 col-12">
              <div className="input__group">
                <span className="input__group__text">
                <CiCalendar />
                </span>
                <input
                  type="date"
                  id="checkout"
                  className="form-control"
                  placeholder="Check-out date"
                />
              </div>
            </div>
            <div className="col-md-8 col-lg-3 col-12">
              <div className="input__group">
                <span className="input__group__text">
                <LuSquareUserRound />
                </span>
                <input
                  type="number"
                  id="guests"
                  className="form-control"
                  placeholder="Number of guests"
                  min="1"
                />
              </div>
            </div> 
          </div>
        </div>
      </div>

    </div>
  );
}
