import "../styles/CompanyInfoCard.css"

export default function CompanyInfoCard({title, info, children}) {
    return (
        <div className="info-card">
            <div className="info-card-icon">
                { children }
            </div>
            <div className="info-card-text">
                <h1 className="info-card-key">{ title }</h1>
                <p className="info-card-value">{ info }</p>
            </div>
        </div>
    )
}