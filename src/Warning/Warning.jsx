import "./Warning.css"
import { PiWarning } from "react-icons/pi";
export default function Warning(){
    return (
        <div className="warning p-0">
            <div className="Warning__container bg-warning py-3 rounded-1">
                <div className="Warning__content d-flex align-items-center gap-3 px-3 ">
                    <span><PiWarning size={30} /></span>
                    <p>Check the latest COVID-19 restrictions before you travel. <a href="#" className="">Learn more</a> </p>
                </div>
            </div>
        </div>
    )
}