import React, {useEffect} from 'react';
import styles from './ProductList.module.scss';
import {IProductItem, useGlobalState} from "../../store/store.ts";
import {getProducts} from "../../api/api.ts";
import ProductItem from "../product-item/ProductItem.tsx";
const ProductList: React.FC = () => {

    const [productList, setProductList] = useGlobalState("productList");

    useEffect(()  => {
        if (productList.length !== 0) return
        getProducts()
            .then((data) => {
                setProductList(data.map((product: IProductItem) => ({ ...product, isFavorite: false })))
            })
            .catch((error) => alert(error));
    }, []);

    useEffect(() => {
        localStorage.setItem('productList', JSON.stringify(productList));
    }, [productList])

    return (
        <div className={styles.container}>
            {productList.map((product) => <ProductItem key={product.id} {...product} />)}
        </div>
    );
};

export default ProductList;