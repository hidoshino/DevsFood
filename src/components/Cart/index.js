import React from "react";
import { useSelector } from "react-redux";

import { CartArea, 
         CartHeader, 
         CartBody,
         CartIcon,
         CartText } from './styled'


export default () => {
    const products = useSelector(state => state.cart.products);


    return (
        <CartArea>
            <CartHeader>
                <CartIcon  src="../assets/cart.png" />
                <CartText>Meu Carrinho ({products.length})</CartText>
            </CartHeader>
            <CartBody>
                ...
            </CartBody>
        </CartArea>
    )

}