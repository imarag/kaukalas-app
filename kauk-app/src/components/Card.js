import "../styles/Card.css"

export default function Card({person, children}) {
    return (
        <div className="card">
            <div className="card-avatar">
                {children}
            </div>
            <h1 className="card-title">{person.name}</h1>
            <h2 className="card-subtitle">{person.profession}</h2>
            <p className="card-opening-quote">🙶</p>
            <p className="card-text">{person.description}</p>
            <p className="card-closing-quote">🙸</p>
        </div>
    )
}