import { BiPlusIcon } from "../SvgIcons.js"
import { BiDash } from "../SvgIcons.js"

import '../styles/Accordion.css'

export default function Accordion({ question, answer, show }) {
    return (
        <div className="accordion">
            <div className="accordion-header">
                <p className="accordion-question">
                    { question }
                </p>
                <div className="accordion-icon">
                    { show ? (
                        <BiDash className="icon icon-dark"/>
                    ) : (
                        <BiPlusIcon className="icon icon-dark"/>
                    )}
                </div>
            </div>
            {show && (
                <div className="accordion-content">
                    <p className="accordion-answer">{ answer}</p>
                </div>
            )}
        </div>
    )
}