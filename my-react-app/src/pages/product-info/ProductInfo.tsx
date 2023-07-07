import React from 'react';
import styles from './ProductInfo.module.scss';
import FavoritesList from "../../components/favorites-list/FavoritesList.tsx";
import CurrentProductInfo from "../../components/current-product-info/CurrentProductInfo.tsx";
const ProductInfo: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <FavoritesList/>
                <CurrentProductInfo/>
            </div>
        </div>
    );
};

export default ProductInfo;