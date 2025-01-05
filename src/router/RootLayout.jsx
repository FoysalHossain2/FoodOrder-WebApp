import { Outlet } from 'react-router-dom'
import Footer from "../Component/HomeComponent/Footer"
import Header from "../Component/HomeComponent/Header"


const RootLayout = () => {
  return (
    <>
     <Header />
     <Outlet />
     <Footer />
    </>
  )
}

export default RootLayout;