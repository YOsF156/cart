import { Link } from "react-router-dom"

export default function Category(props) {
    const { category } = props
    return (
        <div className="product-card container">
            <Link to={`/${category}`}> <h1>{category}</h1></Link>
        </div>
    )
}