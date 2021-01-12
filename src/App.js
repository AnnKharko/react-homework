import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Header} from "./components/header";
import './App.css';
import {ProductList} from "./components/product-list";
import {useServices} from "./services";
import {setProducts} from "./redux";


export default function App() {
    const {cart, wishlist, products} = useSelector(({cart: {cart} , wishlist: {wishlist}, products:{products}}) => ({
        cart, wishlist, products
    }));

    // console.log({products});
    const dispatch = useDispatch();
    const {productService} = useServices();



    useEffect(() => {
        // fetchData();
        dispatch(setProducts());
    },[])

    return (
        <div className={'App'}>
            {products.length}
            {/*<h1>Hello world {cart.length} {wishlist.length} {products.length }</h1>*/}

            <Header />
            <ProductList products = {products}/>
        </div>
    )
}