import React, {useState, UseState} from 'react'



const ShopList = () => {

     const [name, setName] = useState('Shoe shop')
     const handleName = () => {
          setName('Clothing shop')
     }

     return (
          <>
           hi
          </>
     )

}

export default ShopList; 