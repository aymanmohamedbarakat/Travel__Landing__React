import Sydeny from "../assets/images/Sydeny’s-harbor-front.jpg"
import restaurant from "../assets/images/restaurant.jpg"
import greenMountains from "../assets/images/green-mountains-with-cloudy-sky-surface.jpg"
import "./FeaturedGuides.css"
export default function FeaturedGuides(){
    return (
        <div className="featured-guides">
             <h1 className="display-6 mb-5">Get Inspiration for Your Next Trip</h1>
             <div className="row g-4 me-0">
                <div className="col-12 col-md-4">
                    <div className="card position-relative">
                        <img src={Sydeny} className="card-img-top rounded-3" alt="Sydeny’s-h" />
                        <div className="card-body position-absolute bottom-0 text-light">
                            <h3 className="card-title">Sydeny’s 10 most fashionable 5 star hotels</h3>
                            <p className="card-text">Browse the fastest growing tourism sector in the heart of Australia tourism capital ....</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <div className="card position-relative">
                        <img src={restaurant} className="card-img-top rounded-3" alt="restaurant" />
                        <div className="card-body position-absolute bottom-0 text-light">
                            <h3 className="card-title">Enjoy your vacation in best hotels of United Kingdom</h3>
                            <p className="card-text">Top sites where you do not have to worry about being a vegan. Our tourist guide is here...</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <div className="card position-relative">
                        <img src={greenMountains} className="card-img-top rounded-3 custom__img" alt="greenMountains" />
                        <div className="card-body position-absolute bottom-0 text-light">
                            <h3 className="card-title">World’s top destinations during and post covid timeline</h3>
                            <p className="card-text">Pandemic is still intact and will be here for a longer time. Here’s where your next destination...</p>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    )
}