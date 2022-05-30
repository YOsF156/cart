import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Categories from './Categories'
import Header from './Header'
import Items from './Items'
import OpenItem from './OpenItem'

function Layout() {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [cartProducts, setCartProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setFilteredProducts(data)
            })
    }, [])

    if (!products.length > 0) {
        return (
            <div><h1>loading...</h1></div>
        )
    }


    return (
        <div>
            <Header />
            <div className="main">

                <Routes>
                    <Route path="/" element={<Navigate to="/categories" />} />
                    <Route path="/categories" element={<Categories products={products} />} />
                    <Route path="/items" element={<Items />} />
                    <Route path="/open-item" element={<OpenItem />} />
                    <Route path="*" element={<h1>wrong way</h1>} />
                </Routes>

                <Cart />
            </div>
        </div>
    )
}

export default Layout