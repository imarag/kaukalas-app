import { BiPlusIcon } from "../SvgIcons.js"
import { BiDash } from "../SvgIcons.js"

import '../styles/Accordion.css'

export default function Accordion({ question, answer, show }) {
    return (
        <div className="accordion bg-primary text-light my-2">
            <div className="accordion-header p-4">
                <p className="accordion-question fw-semibold">
                    { question }
                </p>
                <div className="accordion-icon">
                    { show ? (
                        <BiDash className="icon icon-light"/>
                    ) : (
                        <BiPlusIcon className="icon icon-light"/>
                    )}
                </div>
            </div>
            {show && (
                <div className="accordion-content py-4 px-6">
                    <p className="accordion-answer fw-light">{ answer}</p>
                </div>
            )}
        </div>
    )
}