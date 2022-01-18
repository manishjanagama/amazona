import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import { useState } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';


function App() {

  const[cartItems, setCartItems] = useState([])

  const[cartTotal, setCartTotal] = useState(0)

  const addToCart = (product) => {
    const item = {
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
      rating: product.rating,
      quantity: 1
    }
    const items = [...cartItems, item]
    setCartItems(items)

    let total = cartTotal
    total+=product.price
    setCartTotal(total)
  }

  const removeFromCart = (id) => {
    let total = cartTotal
    let productPrice
    cartItems.map(item=>{
      if(item.id===id){
        productPrice=item.price*item.quantity
      }
    })
    total= total-productPrice
    setCartTotal(total)
    setCartItems(cartItems.filter(item => item.id !== id))

  }

  const increaseByOne = (id) => {
    let items = cartItems.slice()
    let total = cartTotal
     items =  items.map(item => {
        if(item.id === id)
        {
          let x = item
          x={...item, quantity: item.quantity+1}
          total=total+x.price
          return x
        }
        else return item
      })
      setCartItems(items)
      setCartTotal(total)
  }

  const decreaseByOne = (id) => {
    let items = cartItems.slice()
    let total = cartTotal
    items=items.map(item => {
      if(item.id === id){
        if(item.quantity === 1){
          return removeFromCart(id)
        }
        else{
          let x = item
          x={...item, quantity: item.quantity-1}
          total=total-x.price
          return x
        }
      }
      else return item
    })
    setCartItems(items)
    setCartTotal(total)
  }

  return (
    <div className='app'>
     
      <Router>
      <Header cartItems={cartItems} />
        <Switch>
        
          <Route exact path="/" render={()=><Home addToCart={addToCart} />} />
          <Route path="/cart" render={()=><Cart cartTotal={cartTotal} removeFromCart={removeFromCart} increaseByOne={increaseByOne} decreaseByOne={decreaseByOne} cartItems={cartItems} />} />
          <Route path="/login" render={()=><Login />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
