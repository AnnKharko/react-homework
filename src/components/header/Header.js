import React from 'react';
import {useSelector} from "react-redux";

export  const Header = (props) => {
    const {cart,
        wishlist
    } = useSelector(
        ({cart: {cart}, wishlist: {wishlist} }) => ({
            cart,
            wishlist
        })
    );

    const wishlistPrice = wishlist.reduce((acc, el) => (acc += el.price), 0);
    const cartPrice = cart.reduce((acc,el) => (acc += el.price), 0);
    return (
        <header className={'header d-flex justify-between'}>
            <h2>Hello in nedoshop</h2>
            <div className={'d-flex justify-between align-center'}>
                <div className={'mx-10'} title={wishlistPrice}>wishlist: {wishlist.length}</div>
                <div className={'mx-10'} title={cartPrice} >cart: {cart.length}  </div>
            </div>
        </header>
    )
}