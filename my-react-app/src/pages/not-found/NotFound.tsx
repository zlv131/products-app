import React from 'react';
import styles from './NotFound.module.scss';
const NotFound: React.FC = () => {
    return (
        <div className={styles.container}>
            Ops, this page not found 🥺
        </div>
    );
};

export default NotFound;