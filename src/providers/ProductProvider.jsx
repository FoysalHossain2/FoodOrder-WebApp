import { ProductContext } from "../contexts"
import useProduct from "../hooks/useProduct"

// eslint-disable-next-line react/prop-types
const ProductProvider = ({children}) => {

 const {ProductData, Loading, Error} = useProduct()

  return (
    <ProductContext.Provider value={{ProductData, Loading, Error}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;