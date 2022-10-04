import React from "react";

type AccordionPropsType = {
    name: string,
    collapsed: boolean
}

type AccordionTitlePropsType = {
    name: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>{props.name}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle name={props.name} />
            {!props.collapsed && <AccordionBody />}
        </div>

    )

}

export default Accordion;
