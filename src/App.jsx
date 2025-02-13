import Banner from "./Banner/Banner.jsx";
import FeaturedGuides from "./FeaturedGuides/FeaturedGuides.jsx";
import NavBar from "./NavBar/NavBar.jsx";
import PopularActivities from "./PopularActivities/PopularActivities.jsx";
import PopularDestinations from "./PopularDestinations/PopularDestinations.jsx";
import PopularHotels from "./PopularHotels/PopularHotels.jsx";
import Warning from "./Warning/Warning.jsx";
import WhyUs from "./WhyUs/WhyUs.jsx";

export default function App(){
  return (
    <div>
      <NavBar />
      <Banner />
      <div className="container">
        <Warning />
        <WhyUs />
        <PopularDestinations /> 
        <FeaturedGuides />
        <PopularHotels />
        <PopularActivities />
      </div>
    </div>
  )
}