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


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/singIn" element={<SingInPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Route>
    </Route>
  )
)

const App = () => {
  return (
    <>
     <RouterProvider router={router}>
     </RouterProvider>
    </>
  )
}

export default App