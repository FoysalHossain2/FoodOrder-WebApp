import Banner from "../Component/HomeComponent/Banner"
import DownloadApp from "../Component/HomeComponent/DownloadApp"
import FoodSection from "../Component/HomeComponent/FoodSection"
import HowToOrder from "../Component/HomeComponent/HowToOrder"
import MenuCategory from "../Component/HomeComponent/MenuCategory"
import OfferSection from "../Component/HomeComponent/OfferSection"
// import Feature from "../Component/HomeComponent/Feature"

const HomePage = () => {
  return (
    <>
 
     <Banner /> 
     <HowToOrder />
     <FoodSection />
     <MenuCategory /> 
     {/* <Feature />  */}
     <OfferSection /> 
     <DownloadApp />

    </>
  )
}

export default HomePage