import Banner from "../Component/HomeComponent/Banner"
import DownloadApp from "../Component/HomeComponent/DownloadApp"
import FoodSection from "../Component/HomeComponent/FoodSection"
import HowToOrder from "../Component/HomeComponent/HowToOrder"
import MenuCategory from "../Component/HomeComponent/MenuCategory"
import OfferSection from "../Component/HomeComponent/OfferSection"
import MobileAppFeature from "../Component/HomeComponent/MobileAppFeature"
import OrderOnline from "../Component/HomeComponent/OrderOnline"
import TopRestaurant from "../Component/HomeComponent/TopRestaurant"
// import Feature from "../Component/HomeComponent/Feature"

const HomePage = () => {
  return (
    <>
 
     <Banner /> 
     <OrderOnline /> 
     <TopRestaurant /> 
     <HowToOrder />
     <FoodSection />
     <MenuCategory /> 
     {/* <Feature />  */}
     <OfferSection /> 
     {/* <DownloadApp /> */}
     <MobileAppFeature />

    </>
  )
}

export default HomePage