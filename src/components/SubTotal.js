import CurrencyFormat from "react-currency-format"
import "./subTotal.css"

const SubTotal = ({cartItems, cartTotal}) => {

    return(    
        <div className="subTotal">
            <div>
                <p>SubTotal ({cartItems.length} items) : Rs. </p>
                <strong>{cartTotal}</strong>
            </div>
            <div>
                <small className="subTotal-gift">
                    <input type="checkbox" /> This order cantains a gift
                </small>
            </div>
            <button>Proceed to Pay</button>
        </div>
    )
}

export default SubTotal