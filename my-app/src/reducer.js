export const reducer = (state, action) => {
    // state is state before the update, and action is what we are trying to do

    if(action.type === "CLEAR_CART") {
        return {...state, cart: []}

    }
    if (action.type === "REMOVE") {
        return {
          ...state,
          cart: state.cart.filter((cartItem) => {
             return cartItem.id !== action.payload

          }
          )}

    
      }

      if (action.type === "INCREASE") {
          
        let tempCart = state.cart.map((item) => {
           
           
            if (item.id === action.payload) {
                return {...item, amount: item.amount + 1}
               
            }

            return item
          
        })

        return {...state, cart: tempCart}
      }

      if (action.type === "DECREASE") {
          
        let tempCart = state.cart.map((item) => {
            if (item.id === action.payload) {
                return {...item, amount: item.amount - 1}
            }

            return item
          
        })
        .filter((cartItem) => cartItem.amount !== 0)
        return {...state, cart: tempCart}
      }

    if(action.type === "GET_TOTALS") {
        const {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
            const {price, amount} = cartItem;
           const itemTotal = price * amount
            cartTotal.amount += amount
            cartTotal.total += itemTotal
            
            return cartTotal
            
        }, {
            total: 0,
            amount: 0
        })

        return {...state, total, amount }
        
    }
      


    return state;
}