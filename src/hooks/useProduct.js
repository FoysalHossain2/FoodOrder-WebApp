import { useEffect, useState } from "react";
import {fetchSearchResult} from '../../utils/helper';

const useProduct = () => {
    const [ProductData, setProductData] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [Error, setError] = useState(null);

 useEffect(() => {
    let ignore = false;

    const apiUrl = 'https://backenddata-k2ey.onrender.com/AllFoods';

    const fetchData = async () => {
        setLoading(true)
        try {
            const result = await fetchSearchResult(apiUrl)
            if (!ignore) {
                setProductData(result)
                setError(false)
            }
            
        } catch (error) {
            console.log(error.message, "fetchData is Something error");
            setError(error.message)
        } finally {
            if (!ignore) {
                setLoading(false)
            }
        }
    }
     fetchData()
    
     return () => {
        ignore = true
     }
  
 }, []);
 
 return{
    ProductData,
    Loading,
    Error
 };

} ;

export default useProduct;