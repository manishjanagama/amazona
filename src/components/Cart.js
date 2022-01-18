import CartItem from "./CartItem"
import SubTotal from "./SubTotal"
import "./cart.css"

const Cart = ({cartItems, increaseByOne, decreaseByOne, removeFromCart, cartTotal}) => {
    console.log(cartItems)
    return(
        <div className="cart">
            <div className="cart-left">
                <img
                    className="cart-ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                <div>
                    <h3>Hello, user</h3>
                    <h2 className="cart-title">Your Cart</h2>

                    {cartItems.map(item=>(
                        <CartItem 
                            item={item}
                            increaseByOne={increaseByOne}
                            decreaseByOne={decreaseByOne}
                            removeFromCart={removeFromCart}
                        />
                    ))}
                </div>
            </div>
            <div className="cart-right">
                <SubTotal cartItems={cartItems} cartTotal={cartTotal} />
            </div>
        </div>
    )
}
export default Cart