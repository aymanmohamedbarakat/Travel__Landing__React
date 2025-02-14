import RightHand from "../assets/images/right-hand.png";
import "./DownloadApp.css"
export default function(){
    return (
        <div className="download__app mt-5 mb-5">
            <div className="download__app__item position-relative overflow-hidden">
                <div className="download__app__item__hand position-absolute d-none d-lg-block">
                    <img src={RightHand} alt="left hand" />
                </div>
                <div className="download__app__item__content position-absolute col-12 col-md-8 col-lg-5 top-50 bottom-50 start-0 p-5 text-white">
                <h3> Download the mobile application for bonus coupons and travel codes</h3>
                <button className="btn btn-primary mt-2">Download mobile app</button>
                </div>

            </div>
        </div>
    )
}