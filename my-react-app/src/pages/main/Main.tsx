import React from 'react';
import styles from './Main.module.scss';
import FavoritesList from "../../components/favorites-list/FavoritesList.tsx";
import ProductList from "../../components/product-list/ProductList.tsx";
const Main: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <FavoritesList/>
                <ProductList/>
            </div>
        </div>
    );
};

export default Main;