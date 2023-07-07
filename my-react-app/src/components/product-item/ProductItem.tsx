import React from 'react';
import styles from './ProductItem.module.scss';
import {baseURL} from "../../api/api.ts";
import {useNavigate} from "react-router-dom";
import FavoriteIcon from "../ui/favorite-icon/FavoriteIcon.tsx";
import {FAVORITE_ICON_SIZE} from "../../constants/constants.ts";
interface IProductItem {
    id?: number;
    name?: string;
    price?: number;
    src?: string;
    isFavorite?: boolean;
}
const ProductItem: React.FC<IProductItem> = ({id, name, src, price, isFavorite }) => {

    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <img onClick={() => navigate(`/product/id=${id}`)} src={`${baseURL}${src}`} alt=""/>
            <p className={styles.name}> {name} </p>
            <p className={styles.price}> {price}$ </p>
            <FavoriteIcon isFavorite={isFavorite} id={id} size={FAVORITE_ICON_SIZE.SMALL}/>
        </div>
    );
};

export default ProductItem;