import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Categories from './Categories'
import Header from './Header'
import Items from './Items'
import OpenItem from './OpenItem'

function Layout() {
    const [products, setProducts] = useState([])
    console.log("🚀 ~ file: Layout.js ~ line 11 ~ Layout ~ products", products)
    const [filteredProducts, setFilteredProducts] = useState([])
    const [cartProducts, setCartProducts] = useState([])


    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log("🚀 ~ file: Layout.js ~ line 20 ~ useEffect ~ data", data)
                // setFilteredProducts(data)
                alert("vfdsvjlfv")
            })
    }, [])


    return (
        <div>
            <Header />
            <div className="main">

                <Routes>
                    <Route path="/" element={<Navigate to="/categories" />} />
                    <Route path="/categories" element={products.length > 0 ? <Categories products={products} /> : <div>loading...</div>} />
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