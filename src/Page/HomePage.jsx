import Banner from "../Component/HomeComponent/Banner"
import DownloadApp from "../Component/HomeComponent/DownloadApp"
import FoodSection from "../Component/HomeComponent/FoodSection"
import Footer from "../Component/HomeComponent/Footer"
import Header from "../Component/HomeComponent/Header"
import MenuCategory from "../Component/HomeComponent/MenuCategory"

const HomePage = () => {
  return (
    <>
     <Header /> 
     <Banner /> 
     <FoodSection /> 
     <MenuCategory /> 
     <DownloadApp />
     <Footer />
    </>
  )
}

export default HomePage