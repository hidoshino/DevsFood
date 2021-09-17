import styled from "styled-components";


export const CartArea = styled.div`
    background-color: #136713;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: fixed;
    bottom: 0;
    right: 30px;
`;

export const CartHeader = styled.div`
    height: 50px;
    display: flex;
    width: 290px;
    align-items: center;
    cursor: pointer;
`;

export const CartBody = styled.div`
    display: ${props => props.show ? 'block' : 'none' };
    color: #FFF;
`;

export const CartText = styled.div`
    flex: 1;
    color: #FFF;
    font-size: 17px;
`;

export const CartIcon = styled.img`
    width : 23px;
    height: auto;
    margin: 0 10px;
`;

export const ProductsArea = styled.div`

`;

export const ProductItem = styled.div`
    display: flex;
    margin: 10px;
`;


export const ProductPhoto =styled.img`
    width: 64px;
    heigth: auto;
    border-radius: 10px;
`

export const ProductInfoArea = styled.div`
    flex: 1;
    margin-left: 10px;
`

export const ProductName = styled.div`
    font-size: 15px;
    font-weight: bold;
`

export const ProductPrice = styled.div`
    font-size: 13px;
`

export const ProductQuantityArea = styled.div`
    display: flex;
    align-items: center;
`
export const ProductQtText = styled.div`
    font-size: 13px;
    font-weight: bold;
    margin: 0 5px;
`
export const ProductQtIcon = styled.img`
    width: 13px;
    height: auto;
    cursor: pointer;
`
