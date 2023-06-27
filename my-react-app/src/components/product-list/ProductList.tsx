import React, {useEffect} from 'react';
import styles from './ProductList.module.scss';
import {useGlobalState} from "../../store/store.ts";
import {getProducts} from "../../api/api.ts";
import ProductItem from "../product-item/ProductItem.tsx";

const ProductList: React.FC = () => {

    const [productList, setProductList] = useGlobalState("productList");

    useEffect(()  => {
        getProducts()
            .then((data) => setProductList(data))
            .catch((error) => alert(error));

    }, []);


    console.log(productList)

    return (
        <div className={styles.container}>
            {productList.map((product) => <ProductItem key={product.id} {...product} />)}
        </div>
    );
};

export default ProductList;