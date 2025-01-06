import { useEffect, useState } from "react"
import Search from "../Component/CommonComponent/Search"
import axios from 'axios'

const SearchPage = () => {

  const [data, setData] = useState([])

  useEffect(() => {

    axios.get('http://localhost:3000/category')
    .then(res=> setData(res.data))
    .catch(err => console.log(err))

  }, [])

  console.log(data);
  
  

  return (
    <div className="mt-14 mb-[200px]">
        <div className="container mx-auto">
          <div>
            <div className="flex items-center justify-center">
                <Search />
            </div>
            <div className="xl:pl-[150px] lg:pl-16 md:pl-0 mt-10">
              <h1 className="font-DM_Sans text-lg" >Recant Searches</h1>

              <div className="flex">
                {data.map((item, id) => (
                  <div style={{transform: `translateX(-600)`}} key={id} className="h-28 w-28 shrink-0 duration-500">
                    <img src={item.image} alt="title"  />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default SearchPage