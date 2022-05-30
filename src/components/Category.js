export default function Category(props) {
    const { product } = props
    console.log(product)
    return (
        <div className="product-card container">
            <img src={product.image} alt="" />
            <div>{product.title}</div>
        </div>
    )
}