import "./Card.css"
export default function Card(props) {
    return (
        <div>
            <img className="card-img" src={props.image} alt="" />
            <h3>{props.title}</h3>
        </div>
    )
}