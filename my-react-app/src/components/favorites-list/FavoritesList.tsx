import React, {useEffect} from 'react';
import styles from './FavoritesList.module.scss';
import FavoriteProductCard from "../favorite-product-card/FavoriteProductCard.tsx";
import {useGlobalState} from "../../store/store.ts";
const FavoritesList: React.FC = () => {

    const [favoriteList, setFavoriteList] = useGlobalState("favoriteList");
    const [productList] = useGlobalState("productList");

    useEffect(() => {
        setFavoriteList(productList.filter((item) => item.isFavorite === true));
    }, [])

    return (
        <div className={styles.container}>
            <p className={styles.title}> FAVORITES </p>
            {favoriteList.map((favoriteItem) => <FavoriteProductCard key={favoriteItem.id} {...favoriteItem}/>)}
        </div>
    );
};

export default FavoritesList;