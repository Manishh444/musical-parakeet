import React, { useState } from 'react'
import { faker } from '@faker-js/faker';

// import faker from 'faker'
import { BrowserRouter, Link } from 'react-router-dom'
import SingleProduct from './SingleProduct';

faker.seed(30)
const HomePage = () => {
    const productsArray = [...Array(20)].map((x, index) => ({
        id:index,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        // image: faker.image.avatar(), not using becoz its ugly and disturbing hate this imagesssss aaaaaaaaa
      }));
      const [cart, setCart]= useState([])
    // console.log(productsArray)
    console.log("this is cart",cart)
    console.log(typeof cart)
    const[products, setProducts] = useState(productsArray)

  return (
    <>
    <div className='ProductCard'>
        {products.map((prod)=>{
            return(
                <SingleProduct prod={prod} cart={cart} setCart={setCart} key={prod.id}></SingleProduct>
            )
        })}
    </div>
    </>
  )
}

export default HomePage