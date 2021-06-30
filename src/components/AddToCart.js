import React, { useContext } from "react"
import { CartContext } from '../contexts/Cart'
import { Button } from 'reactstrap'

export default function ({ product }) {
    const { addToCart } = useContext(CartContext)
    return (
        <Button onClick={() => addToCart(product)}>Add to cart</Button>
    )
}