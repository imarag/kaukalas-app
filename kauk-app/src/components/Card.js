import "../styles/Card.css"
import { StarIcon } from "../SvgIcons"
export default function Card({person, children}) {
    return (
        <div className="card">
            <div className="card-avatar">
                {children}
            </div>
            <h1 className="card-title fw-semibold text-center">{person.name}</h1>
            <h2 className="card-subtitle fs-small text-center fw-light">{person.profession}</h2>
            <div className="card-rating my-4">
                <StarIcon className="icon icon-small"/>
                <StarIcon className="icon icon-small"/>
                <StarIcon className="icon icon-small"/>
                <StarIcon className="icon icon-small"/>
                <StarIcon className="icon icon-small"/>
            </div>
            <p className="card-text text-muted fs-small text-center">{person.description}</p>
        </div>
    )
}