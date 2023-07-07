import React from 'react';
import styles from './FavoriteIcon.module.scss';
import {useGlobalState} from "../../../store/store.ts";

interface IFavoriteIcon {
    size?: number;
    isFavorite?: boolean;
    id?: number;
    isFavoriteList?: boolean;
}

const FavoriteIcon: React.FC<IFavoriteIcon> = ({ size, isFavorite, id, isFavoriteList }) => {

    const [productList, setProductList] = useGlobalState("productList");
    const [favoriteList, setFavoriteList] = useGlobalState("favoriteList");
    const [productInfo, setProductInfo] = useGlobalState("productInfo");
    const handleClick = () => {
        if (isFavoriteList === true) {
            setFavoriteList(favoriteList.filter((item) => item.id !== id));
            setProductList(productList.map((product) => (
                product.id === id
                    ? {...product, isFavorite: false}
                    : product
            )));
            id === productInfo?.id && setProductInfo({...productInfo, isFavorite: !isFavorite});

        } else {
            isFavorite
                ? setFavoriteList(favoriteList.filter((item) => item.id !== id))
                : setFavoriteList([...favoriteList, productList.filter((item) => item.id === id)[0]]);

                setProductList(productList.map((product) => (
                product.id === id
                    ? {...product, isFavorite: !isFavorite}
                    : product
            )));

            setProductInfo && setProductInfo({...productInfo, isFavorite: !isFavorite});
        }
    };

    return (
        <div className={styles.container}>
            {isFavorite
                ?  <svg onClick={() => handleClick()} className={styles.favorite} width={size} height={size} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2.5" y="2.5" width="25" height="25" rx="7" fill="#414141"/>
                    <path d="M5.625 1.875C4.63044 1.875 3.67661 2.27009 2.97335 2.97335C2.27009 3.67661 1.875 4.63044 1.875 5.625V24.375C1.875 25.3696 2.27009 26.3234 2.97335 27.0266C3.67661 27.7299 4.63044 28.125 5.625 28.125H24.375C25.3696 28.125 26.3234 27.7299 27.0266 27.0266C27.7299 26.3234 28.125 25.3696 28.125 24.375V5.625C28.125 4.63044 27.7299 3.67661 27.0266 2.97335C26.3234 2.27009 25.3696 1.875 24.375 1.875H5.625ZM15 10.8188C15 10.8188 16.3219 8.78438 18.0375 8.48438C22.2937 7.74375 24.0469 11.4656 23.3344 14.2313C22.0687 19.1719 15 23.4844 15 23.4844C15 23.4844 7.93125 19.1719 6.66563 14.2406C5.9625 11.475 7.71562 7.74375 11.9625 8.49375C13.6781 8.79375 15 10.8188 15 10.8188Z" fill="#FFCC26"/>
                </svg>
                :  <svg onClick={() => handleClick()} className={styles.favorite} width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={styles.favorite} d="M6.75 2.25C5.55653 2.25 4.41193 2.72411 3.56802 3.56802C2.72411 4.41193 2.25 5.55653 2.25 6.75V29.25C2.25 30.4435 2.72411 31.5881 3.56802 32.432C4.41193 33.2759 5.55653 33.75 6.75 33.75H29.25C30.4435 33.75 31.5881 33.2759 32.432 32.432C33.2759 31.5881 33.75 30.4435 33.75 29.25V6.75C33.75 5.55653 33.2759 4.41193 32.432 3.56802C31.5881 2.72411 30.4435 2.25 29.25 2.25H6.75ZM18 12.9825C18 12.9825 19.5863 10.5413 21.645 10.1813C26.7525 9.2925 28.8562 13.7587 28.0012 17.0775C26.4825 23.0063 18 28.1812 18 28.1812C18 28.1812 9.5175 23.0063 7.99875 17.0887C7.155 13.77 9.25875 9.2925 14.355 10.1925C16.4138 10.5525 18 12.9825 18 12.9825Z" fill="#FFCC26"/>
                </svg>
            }
        </div>
    );
};

export default FavoriteIcon;