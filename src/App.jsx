import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./Page/HomePage"
import ShopPage from "./Page/ShopPage";
import CartPage from "./Page/CartPage";
import SingInPage from "./Page/SingInPage";
import RootLayout from "./router/RootLayout"
import SearchPage from "./Page/SearchPage";
import NotFoundPage from "./Page/NotFoundPage";
import SingUpPage from "./Page/SingUpPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/singin" element={<SingInPage />} />
        <Route path="/singup" element={<SingUpPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Route>
    </Route>
  )
)


const App = () => {



  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App