import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Categories from './Categories'
import Header from './Header'
import Items from './Items'
import Login from './Login'
import OpenItem from './OpenItem'

function Layout() {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [cartProducts, setCartProducts] = useState([])
    // const [log, setLog] = useState(false)
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setFilteredProducts(data)
            })
    }, [])



    return (!products.length > 0) ? (
        <div><h1>loading...</h1></div>
    ) :
        (
            <div>
                <Header />

                <div className="main">
                    <Cart />
                    <Routes>

                        <Route path="/" element={<Navigate to="/categories" />} />
                        <Route path="/categories" element={<Categories products={products} />} />
                        <Route path="/:category" element={<Items />} />
                        <Route path="/open-item" element={<OpenItem />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>

                </div>
            </div>
        )
}

export default Layout