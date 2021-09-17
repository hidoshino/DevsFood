import React, {useState, useEffect} from "react";

import {useDispatch} from 'react-redux'

import {
    Container,
    ProductArea,
    ProductPhoto,
    ProductInfoArea,
    ProductDetails,
    ProductQuantityArea,
    ProductButtons,
    ProductName,
    ProductIngredients,
    ProductButton,
    ProductQuantity,
    ProductQtImage,
    ProductQtText,
    ProductQtPrice
} from './styled'

export default ({ data, setActive }) => {

    const dispatch = useDispatch();

    const [qt, setQt] = useState(1);

    const handleCancelButton = () => {
        setActive(false);
    }

    const handleAddToCart = () => {

        dispatch({
            type: 'ADD_PRODUCT',
            payload:{ data, qt }
        })

        setActive(false);
    }

    const handleMinusQt = () => {
        if(qt > 1){
            setQt( qt - 1 );
        } 
    }

    const handlePlusQt = () => {
        setQt( qt + 1 );
    }

    useEffect(() => {
        setQt(1);
    }, [data]);

    return (
        <Container>
            <ProductArea>
                <ProductPhoto src={data.image} />
                <ProductInfoArea>
                    <ProductDetails>
                        <ProductName>{data.name}</ProductName>
                        <ProductIngredients>{data.ingredients}</ProductIngredients>
                    </ProductDetails>
                    <ProductQuantityArea>
                        <ProductQuantity>
                            <ProductQtImage onClick={handleMinusQt} src="../assets/minus.png" />
                            <ProductQtText>{qt}</ProductQtText>
                            <ProductQtImage onClick={handlePlusQt} src="../assets/plus.png" />
                        </ProductQuantity>
                        <ProductQtPrice>R$ {(data.price * qt).toFixed(2)}</ProductQtPrice>
                    </ProductQuantityArea>
                </ProductInfoArea>
            </ProductArea>
            <ProductButtons>
                <ProductButton onClick={handleCancelButton} small={true}>Cancelar</ProductButton>
                <ProductButton onClick={handleAddToCart}>Adicionar ao carrinho</ProductButton>
            </ProductButtons>
        </Container>
    )

}