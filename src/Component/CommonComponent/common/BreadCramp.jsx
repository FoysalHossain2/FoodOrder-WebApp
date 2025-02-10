import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BreadCrumb = () => {
  const location = useLocation()
  const BradCrumbLocation = location.pathname.split('/').filter((x) => x)
  let BradCrumb = ""

  console.log(BradCrumbLocation, "BradCrumb");
  

  return (
    <>
    <div>
      <ul className='flex items-center gap-x-2 text-sm font-DM_Sans text-gray-500'>
        <Link to={'/'}>Home</Link>
        <li>{BradCrumbLocation?.map((path,index) => {
          const isLodging = index === BradCrumbLocation.length -1 
          BradCrumb += `/${path}`
          return (
            <Link>/ {path}</Link>
          )
          })}
        </li>
      </ul>
    </div>
    </>
  )
}

export default BreadCrumb