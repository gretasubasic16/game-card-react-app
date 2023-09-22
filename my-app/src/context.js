import React, {useState, useEffect, useContext, useReducer} from "react"
import { games } from "./data"
import { reducer } from "./reducer";

const GamesContext = React.createContext();

const initialState = {
    cart: games,
    total: 0,
    amount: 0,
}


const GamesProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const clearCart = () => {
        // action we are dispatching
        dispatch({ type: "CLEAR_CART" })
    }

    const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }

  const increase = (id) => {
      dispatch({type: "INCREASE", payload: id})
  }

  const decrease = (id) => {
    dispatch({type: "DECREASE", payload: id})
}


useEffect(() => {
    console.log("hello from get totals")
    dispatch({type: "GET_TOTALS"})

},[state.cart])

    return (
        <GamesContext.Provider value={{...state, clearCart, remove, increase, decrease}}>


            {children}
        </GamesContext.Provider>
    )

}

export const useGlobalContext = () => {
    return useContext(GamesContext)
}

export {GamesContext, GamesProvider}
