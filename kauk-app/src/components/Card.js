import "../styles/Card.css"
import { StarIcon } from "../SvgIcons"
export default function Card({person, children}) {
    return (
        <div className="card">
            <div className="card-avatar">
                {children}
            </div>
            <h1 className="card-title">{person.name}</h1>
            <h2 className="card-subtitle">{person.profession}</h2>
            <div className="card-rating">
                <StarIcon className="icon icon-small"/>
                <StarIcon className="icon icon-small"/>
                <StarIcon className="icon icon-small"/>
                <StarIcon className="icon icon-small"/>
                <StarIcon className="icon icon-small"/>
            </div>
            <p className="card-text">{person.description}</p>
        </div>
    )
}