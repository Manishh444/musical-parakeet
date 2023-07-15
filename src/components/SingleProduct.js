const SingleProduct = ({prod, setCart, cart}) => {
    const {name, image, price,} = {...prod}
;    
  return (
    <div className='card'>
        <img src={image} alt={"product logo"}/>
        <div className='cardDesc'>
            <h4>{name}</h4>
            <h4>{price}</h4>
        </div>
        <button className='button' onClick={()=>{
            setCart([...cart, prod])
        }}>Add to card</button>
        <button className='button' onClick={()=>{
            const lastIndex = cart.lastIndexOf(prod.id ==1);
            console.log("last index elemet",lastIndex)  
            
        }}>Remove from cart</button>
    </div>
  )
}

export default SingleProduct