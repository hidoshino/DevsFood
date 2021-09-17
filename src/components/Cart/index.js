import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    CartArea,
    CartHeader,
    CartBody,
    CartIcon,
    CartText,
    ProductsArea,
    ProductItem,
    ProductPhoto,
    ProductInfoArea,
    ProductName,
    ProductPrice,
    ProductQuantityArea,
    ProductQtIcon,
    ProductQtText
} from './styled'


export default () => {
    const dispatch = useDispatch();

    const products = useSelector(state => state.cart.products);

    const [opened, setOpened] = useState(true);

    const handleCartClick = () => {
        setOpened(!opened);
    }

    const handleProductChange = (key, type) => {
        dispatch({
            type: 'CHANGE_PRODUCT',
            payload: {key, type}
        });
    }

    return (
        <CartArea>
            <CartHeader onClick={handleCartClick}>
                <CartIcon src="../assets/cart.png" />
                <CartText>Meu Carrinho ({products.length})</CartText>
                {opened &&
                    <CartIcon src="../assets/down.png" />
                }
            </CartHeader>
            <CartBody show={opened}>
                <ProductsArea>
                    {products.map((item, key) => (
                        <ProductItem key={key}>
                            <ProductPhoto src={item.image} />
                            <ProductInfoArea>
                                <ProductName>{item.name}</ProductName>
                                <ProductPrice>{item.price.toFixed(2)}</ProductPrice>
                            </ProductInfoArea>
                            <ProductQuantityArea>
                                <ProductQtIcon
                                    src="../assets/minus.png"
                                    onClick={() => handleProductChange(key, '-')}
                                />
                                <ProductQtText>{item.qt}</ProductQtText>
                                <ProductQtIcon
                                    src="../assets/plus.png"
                                    onClick={() => handleProductChange(key, '+')}
                                />
                            </ProductQuantityArea>
                        </ProductItem>
                    ))}
                </ProductsArea>
            </CartBody>
        </CartArea>
    )

}