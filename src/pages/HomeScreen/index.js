import React, { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import { useHistory } from "react-router-dom";

import {
    Container,
    CategoryArea,
    CategoryList,
    ProductArea,
    ProductList,
    ProductPaginationArea,
    ProductPaginationItem
} from './styled';

import api from '../../api';

import Header from '../../components/Header/index'
import CategoryItem from '../../components/CategoryItem';
import ProductItem from '../../components/ProductItem';
import Modal from '../../components/modal'
import ModalProduct from '../../components/ModalProduct'

let searchTimer = null;

export default () => {

    const [modalStatus, setModalStatus] = useState(false);
    const [modalData, setModalData] = useState({});
    const [headerSearch, setHeaderSearch] = useState('');
    const [activeSearch, setActiveSearch] = useState('');
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState(0);
    const [activePage, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const history = useHistory();

    const handleButtonClick = () => {
        history.push('/tela2/testador');
    }

    const handleProductClick = (data) => {
        setModalData(data);
        setModalStatus(true);
    }

    const getProducts = async () => {
        const prods = await api.getProducts(activeCategory, activePage, activeSearch);
        if (prods.error == '') {
            setProducts(prods.result.data);
            setPage(prods.result.page);
            setTotalPages(prods.result.pages);
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
        setProducts([]);
        getProducts();
    }, [activeCategory, activePage, activeSearch]);

    useEffect(() => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {
            if (headerSearch !== '') {
                setActiveSearch(headerSearch);
            }
        }, 1600);
    }, [headerSearch]);

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
                                onClick={handleProductClick}
                            />
                        ))}
                    </ProductList>
                </ProductArea>
            }

            {totalPages > 0 &&
                <ProductPaginationArea>
                    {Array(totalPages).fill(0).map((item, key) => (
                        <ProductPaginationItem
                            key={key}
                            active={key + 1}
                            current={activePage}
                            onClick={() => setPage(key + 1)}
                        >
                            {key + 1}
                        </ProductPaginationItem>
                    ))}
                </ProductPaginationArea>
            }

            <Modal
                active={modalStatus}
                setActive={setModalStatus}
            >
                <ModalProduct data={modalData} setActive={setModalStatus}></ModalProduct>
            </Modal>

        </Container>
    );
};