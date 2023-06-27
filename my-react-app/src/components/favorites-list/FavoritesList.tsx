import React from 'react';
import styles from './FavoritesList.module.scss';
const FavoritesList: React.FC = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}> FAVORITES </p>
        </div>
    );
};

export default FavoritesList;