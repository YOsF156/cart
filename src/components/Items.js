import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Card from "./Card"

export default function Items(props) {
    const [productsToShow, setProductsToShow] = useState([])
    const { category } = useParams()
    useEffect(() => {

        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res => res.json())
            .then(data => {
                setProductsToShow(data);
                console.log(data)
            })


    }, [])
    return (
        <div>
            {productsToShow.map((product) => <Card key={product.id} {...product} />)}
        </div>
    )
}