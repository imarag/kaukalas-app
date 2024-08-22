
export default function Accordion({ question, answer, show }) {
    return (
        <div className="accordion__item">
            <div className="accordion__header">
                <p className="accordion__question">
                    { question }
                </p>
                <div className="accordion__icon">
                    { show ? (
                        <svg className="accordion__icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                        </svg>
                    ) : (
                        <svg className="accordion__icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
                        </svg>
                    )}
                </div>
            </div>
            {show && (
                <div className="accordion__content">
                    <p className="accordion__answer">{ answer}</p>
                </div>
            )}
        </div>
    )
}