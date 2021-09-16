import React, { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import { useHistory } from "react-router-dom";
import { Container, CategoryArea, CategoryList, 
         ProductArea, ProductList 
       } from './styled';

import api from '../../api';

import Header from '../../components/Header/index'
import CategoryItem from '../../components/CategoryItem';
import ProductItem from '../../components/ProductItem';

export default () => {

    const [headerSearch, setHeaderSearch] = useState('');
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState(0);

    const history = useHistory();

    const handleButtonClick = () => {
        history.push('/tela2/testador');
    }

    const getProducts = async () => {
        const prods = await api.getProducts();
        if (prods.error == '') {
            setProducts(prods.result.data);
        }
    }

    useEffect(() => {
        const getCategories = async () => {
            const cat = await api.getCategories();
            if (cat.error == '') {
                setCategories(cat.result);
            }

            ReactTooltip.rebuild();
        };

        getCategories();
    }, []);

    useEffect(() => {
        getProducts();
    }, [activeCategory]);

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />
            {categories.length > 0 &&
                <CategoryArea>
                    Selecione uma categoria
                    <CategoryList>
                        <CategoryItem
                            data={{
                                id: 0,
                                name: "Todas as Categorias",
                                image: "../assets/food-and-restaurant.png"
                            }}
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                        />
                        {categories.map((item, key) => (
                            <CategoryItem
                                key={key}
                                data={item}
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                            />
                        ))
                        }
                    </CategoryList>
                </CategoryArea>
            }
            {products.length > 0 &&
                <ProductArea>
                    <ProductList>
                        {products.map((item, key) => (
                            <ProductItem
                                key={key}
                                data={item}
                            />
                        ))}
                    </ProductList>
                </ProductArea>
            }
        </Container>
    );
}