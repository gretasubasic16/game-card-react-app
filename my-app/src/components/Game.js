import React from 'react'
import { useGlobalContext } from "../context"


const Game = ({ id, img, name, price, amount }) => {

    const { remove, increase, decrease } = useGlobalContext()

    return (
        <div>
            
            <article className="game-container">
                <img src={img} alt="" />
                <div className="game-info">
                <h3>{name}</h3>
                <h4>Price: {price} $ </h4>
                <button onClick={() => remove(id)} className="btn">Remove</button>
                </div>

                <div className="cart-container">
                <button onClick={() => increase(id)} className="amount-btn">+</button>
                <h3 className="amount">{amount} </h3>
                
                <button onClick={() => decrease(id)} className="amount-btn">-</button>
            
            </div>
                
            </article>

           
            
           
            </div>
            )
    }

export default Game
