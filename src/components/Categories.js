import Category from "./Category"

export default function Categories(props) {
    const { products } = props

    return (
        <div className="products">
            {products.map((product) => <Category key={product.id} product={product} />)}

        </div>
    )
}