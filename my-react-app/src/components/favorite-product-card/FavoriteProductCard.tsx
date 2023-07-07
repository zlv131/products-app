import React from 'react';
import styles from './FavoriteProductCard.module.scss';
import {baseURL} from "../../api/api.ts";
import FavoriteIcon from "../ui/favorite-icon/FavoriteIcon.tsx";
import {FAVORITE_ICON_SIZE} from "../../constants/constants.ts";

interface IFavoriteProductCard {
    id?: number;
    name?: string;
    price?: number;
    src?: string;
}
const FavoriteProductCard: React.FC<IFavoriteProductCard> = ({ id, name, price, src }) => {

    return (
        <div className={styles.container}>
            <img src={`${baseURL}${src}`} alt=""/>
            <p className={styles.name}> {name} </p>
            <p className={styles.price}> {price}$ </p>
            <FavoriteIcon isFavoriteList={true} size={FAVORITE_ICON_SIZE.TINY} isFavorite={true} id={id}/>
        </div>
    );
};

export default FavoriteProductCard;