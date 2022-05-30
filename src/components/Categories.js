import Category from "./Category"

export default function Categories(props) {
    const { products } = props
    const categories = products.map(val => val.category).filter((category, i, arr) => arr.indexOf(category) === i);
    return (
        <div className="products">
            {categories.map((category) => <Category key={category} category={category} />)}

        </div>
    )
}