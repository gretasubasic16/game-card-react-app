import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { useGlobalContext } from '../context'

const Header = () => {
    const {amount, total, cart} = useGlobalContext()
    return (
        <div className="header-container">
            <div className="header">
            
            <FaShoppingCart />
            <span>{amount}</span>
            </div>
           
            
        </div>
    )
}

export default Header
