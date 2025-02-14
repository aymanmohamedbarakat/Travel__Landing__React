import ticketImg from "../assets/images/ticket.svg.svg";
import airBallon from "../assets/images/hot-air-balloon.svg fill.svg";
import  diamond from "../assets/images/diamond.svg.svg";
import medal from "../assets/images/medal.svg.svg";
export default function WhyUs(){
    return (
        <div className="why__us mt-5 ">
            <h1 className="display-6 text-capitalize">Why Choose Us</h1>
        <div className="row me-0 py-3 d-flex flex-column flex-md-row aling-items-center justify-content-center text-center text-md-start">
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="feature">
          <img src={ticketImg} alt="ticketImg" className="img-fluid mb-4" />
            <h3>Ultimate Flexibility</h3>
            <p>
              You’re in control, with free cancellation and payment options to
              satisfy any plan or budget.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="feature">
          <img src={airBallon} alt="airBallon" className="img-fluid mb-4" />
            <h3>Memorable Experiences</h3>
            <p>
              Browse and book tours and activities so incredible, you’ll want to
              tell your friends.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="feature">
          <img src={diamond} alt="diamond" className="img-fluid mb-4" />
            <h3>Quality at Our Core</h3>
            <p>
              High-quality standards. Millions of reviews. A Tourz company.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="feature">
          <img src={medal} alt="medal" className="img-fluid mb-4" />
            <h3>Award-Winning Support</h3>
            <p>
              New price? New plan? No problem. We’re here to help. 24/7.
            </p>
          </div>
        </div>
      </div>
        </div>
    )
}