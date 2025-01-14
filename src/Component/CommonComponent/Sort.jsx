
import { Select, SelectAction, SelectContent, SelectGroup, SelectItem,  SelectValue } from 'keep-react'


 const Sort = () => {

    return (
      <Select className='mt-10'>
        <SelectAction className=''>
          <SelectValue placeholder="Sort" />
        </SelectAction>
        <SelectContent>
          <SelectGroup className=''>

            <SelectItem value="gd">Graphic Designer</SelectItem>
            <SelectItem value="ud">Cost: Low to height</SelectItem>
            <SelectItem value="pm">Cost: Height to Low </SelectItem>
          </SelectGroup>
          <p className='text-center'>apply</p>
        </SelectContent>
      </Select>
    )

}

export default Sort ;