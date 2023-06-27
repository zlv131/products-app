import {createGlobalState} from "react-hooks-global-state";

interface IProductItem {
    id: number;
    name?: string;
    price?: number;
    src?: string;
}
interface IGlobalState {
    productList: IProductItem[];
}

const { useGlobalState } = createGlobalState<IGlobalState>({
    productList: [],
});


export { useGlobalState }