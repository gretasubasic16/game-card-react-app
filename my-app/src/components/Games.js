import React from 'react'
import { useGlobalContext } from '../context'
import Game from './Game'



const Games = () => {
    const {id, total, clearCart, cart, remove} = useGlobalContext()

    if (cart.length === 0) {
        return (
            <section>
           
            <header>
              <h2>your bag is currently empty</h2>
              
            </header>
          </section>
        )
    }

    return (
      <>
     
      <div className="game-wrapper">
      <h2>Game Shop</h2>
     
     
          {cart.map((item) => {
              const {id, name, img, price} = item;
              return <Game key={id} {...item} />
             
              
             
          })}
          
          

     

      </div>

      <h1>Total: {total} $</h1>

      <div className="clear-cart-container">

           <button className="clear-cart-btn" onClick={clearCart}>CLEAR CART</button>
           
       </div>
    
      </>
    )
}

export default Games
