import "./cartItem.css"

const CartItem = ({item, increaseByOne, decreaseByOne, removeFromCart}) => {
    return(
        <div className="cartItem">
            <img className="cartItem-image" src={item.image} />
            <div className="cartItem-info">
                <p className="cartItem-title">{item.name}</p>
                <p className="cartItem-price">
                    <small>Rs. </small>
                    <strong>{item.price}</strong>
                </p>
                <div className="cartItem-rating">
                    {Array(item.rating)
                    .fill()
                    .map((_, i)=>(
                        <p>🌟</p>
                    ))}
                </div>
                <button onClick={()=>removeFromCart(item.id)}>Remove from Cart</button>
                <div className="cartItem-quantity">
                    <button onClick={()=>increaseByOne(item.id)}>+</button>
                    <p>{item.quantity}</p>
                    <button onClick={item.quantity === 1 ? ()=>removeFromCart(item.id) : ()=>decreaseByOne(item.id)}>-</button>
                </div>
                
            </div>
        </div>
    )
}

export default CartItem