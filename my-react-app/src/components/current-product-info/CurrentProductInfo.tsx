import React, {useEffect} from 'react';
import styles from './CurrentProductInfo.module.scss';
import {useGlobalState} from "../../store/store.ts";
import {getProductInfo} from "../../api/api.ts";
import {useParams} from "react-router-dom";
import {convertId} from "../../helpers/convertId.ts";
import ImageMagnify from "../ui/image-magnify/ImageMagnify.tsx";
import Modal from "../modal/Modal.tsx";
import FavoriteIcon from "../ui/favorite-icon/FavoriteIcon.tsx";
import {FAVORITE_ICON_SIZE} from "../../constants/constants.ts";
const CurrentProductInfo: React.FC = () => {

    const {id} = useParams();
    const [productList] = useGlobalState("productList");
    const [productInfo, setProductInfo] = useGlobalState("productInfo");

    useEffect(() => {
        setProductInfo({});
    }, [])

    useEffect(() => {
        getProductInfo(convertId(String(id)))
            .then((data) => setProductInfo({...data, isFavorite: productList[convertId(String(id))-1].isFavorite}))
            .catch((error) => alert(error));
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.imgProduct}>
                <ImageMagnify src={String(productInfo.src)}/>
                <Modal src={String(productInfo?.src)}/>
            </div>
            <p className={styles.name}> {productInfo?.name} </p>
            <p className={styles.price}> {productInfo?.price}$ </p>
            <div className={styles.buttonFavorite}>
                <FavoriteIcon isFavorite={productInfo?.isFavorite} id={productInfo?.id} size={FAVORITE_ICON_SIZE.BIG}/>
            </div>
        </div>
    );
};

export default CurrentProductInfo;