import {createGlobalState} from "react-hooks-global-state";

export interface IProductItem {
    id?: number;
    name?: string;
    price?: number;
    src?: string;
    isFavorite?: boolean;
}
interface IGlobalState {
    productList: IProductItem[];
    favoriteList: IProductItem[];
    productInfo: IProductItem;
}

const { useGlobalState } = createGlobalState<IGlobalState>({
    productList: JSON.parse(String(localStorage.getItem('productList'))) ? JSON.parse(String(localStorage.getItem('productList'))) : [],
    favoriteList: [],
    productInfo: {},
});


export { useGlobalState }