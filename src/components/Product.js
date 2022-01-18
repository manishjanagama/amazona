import "./product.css"

const Product = ({product, addToCart}) => {
    return(
        <div className="product">
            <div className="product-info">
                <p>{product.name}</p>
                <p className="product-price">
                    <small>Rs. </small>
                    <strong>{product.price}</strong>
                </p>
                <div className="product-rating">
                    {Array(product.rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
            </div>

            <img src={product.image} />
            <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
    )
}

export default Product