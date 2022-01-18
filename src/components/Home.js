import Product from "./Product"
import "./home.css"

const Home =({addToCart}) => {

    const product1 ={
        id: 1,
        name: "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
        price: 11.96,
        rating: 5,
        image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
    }

    const product2 ={
        id:49538094,
        name:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
        price: 39.0,
        rating:4,
        image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
    }

    const product3 ={
        id:4903850,
        name:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
        price:199.99,
        rating:3,
        image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
    }

    const product4 ={
        id:23445930,
        name:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
        price:98.99,
        rating:5,
        image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
    }

    const product5 ={
        id:3254354345,
        name:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
        price:598.99,
        rating:4,
        image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
    }

    const product6 ={
        id:90829332,
        name:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
        price:1094.98,
        rating:4,
        image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
    }

    console.log("home")

    return(
        <div className="home">
            <div>
                <img
                    className="home-image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />

                <div className="home-row">
                    <Product addToCart={addToCart} product={product1} />
                    <Product addToCart={addToCart} product={product2} />
                </div>

                <div className="home-row">
                    <Product addToCart={addToCart} product={product3} />
                    <Product addToCart={addToCart} product={product4} />
                    <Product addToCart={addToCart} product={product5} />
                </div>

                <div className="home-row">
                    <Product addToCart={addToCart} product={product6} />
                </div>
            </div>
        </div>
    )
}

export default Home