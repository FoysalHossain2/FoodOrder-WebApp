import Banner from "../Component/HomeComponent/Banner"
import DownloadApp from "../Component/HomeComponent/DownloadApp"
import FoodSection from "../Component/HomeComponent/FoodSection"
import MenuCategory from "../Component/HomeComponent/MenuCategory"
import OfferSection from "../Component/HomeComponent/OfferSection"

const HomePage = () => {
  return (
    <>
 
     <Banner /> 
     <FoodSection />
     <MenuCategory /> 
     <OfferSection /> 
     <DownloadApp />

    </>
  )
}

export default HomePage