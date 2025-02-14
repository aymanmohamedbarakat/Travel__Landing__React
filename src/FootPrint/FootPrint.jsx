import Donations from "../assets/images/1.svg.svg"
import Campaigns from "../assets/images/2.svg.svg"
import People from "../assets/images/3.svg.svg"
import Volunteers from "../assets/images/4.svg.svg"


export default function FootPrint (){
    return (
        <div className="footprint">
            <div className="footprint__container">
                <h1 className="display-6 text-capitalize mb-5">our footprints</h1>
                <div className="footprint__content d-flex flex-column flex-md-row align-items-center justify-content-between  gap-5 gap-md-0">
                    <div className="col-12 col-md-3 col-lg-3">
                        <div className="my__card d-flex flex-column align-items-center justify-content-center">
                            <img src={Donations} alt="donations" className="card__img"/>
                            <div className="card__content d-flex flex-column align-items-center justify-content-center">
                                <h2 className="card__title">932M</h2>
                                <p className="card__text">Total Donations</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-lg-3">
                        <div className="my__card d-flex flex-column align-items-center justify-content-center">
                            <img src={Campaigns} alt="donations" className="card__img"/>
                            <div className="card__content d-flex flex-column align-items-center justify-content-center">
                                <h2 className="card__title">24M</h2>
                                <p className="card__text">Campaigns Closed</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-lg-3">
                        <div className="my__card d-flex flex-column align-items-center justify-content-center">
                            <img src={People} alt="donations" className="card__img"/>
                            <div className="card__content d-flex flex-column align-items-center justify-content-center">
                                <h2 className="card__title">10M</h2>
                                <p className="card__text">Happy People</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-lg-3">
                        <div className="my__card d-flex flex-column align-items-center justify-content-center">
                            <img src={Volunteers} alt="donations" className="card__img"/>
                            <div className="card__content d-flex flex-column align-items-center justify-content-center">
                                <h2 className="card__title">65M</h2>
                                <p className="card__text">Our Volunteers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}