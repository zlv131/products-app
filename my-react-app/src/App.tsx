import styles from './App.module.scss';
import {Route, Routes} from "react-router-dom";
import Main from "./pages/main/Main.tsx";
import NotFound from "./pages/not-found/NotFound.tsx";
import ProductInfo from "./pages/product-info/ProductInfo.tsx";
import Header from "./components/header/Header.tsx";
function App() {

  return (
    <div className={styles.container}>
        <Header/>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="product/:id" element={<ProductInfo/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>
  )
}

export default App
