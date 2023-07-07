import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import {baseURL} from "../../../api/api.ts";
import styles from './ImageMagnify.module.scss';
interface IImageMagnify {
    src: string;
}

const ImageMagnify: React.FC<IImageMagnify> = ({ src }) => {

    const img: string = `${baseURL}${src}`;

    return (
        <div className={styles.container}>
            <ReactImageMagnify {...{
                smallImage: {
                    src: img,
                    width: 448,
                    height: 448,
                    isFluidWidth: false,
                },
                largeImage: {
                    src: img,
                    width: 800,
                    height: 1000,
                },
            }} />
        </div>
    );
};

export default ImageMagnify;