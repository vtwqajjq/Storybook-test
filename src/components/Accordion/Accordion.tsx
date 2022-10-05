import React from "react";
import {StateType} from "./Accordion.test";

type AccordionPropsType = {
    name: string
    collapsed: StateType
    collapseDiv: () => void
}

type AccordionTitlePropsType = {
    name: string
    collapseDiv: () => void
}



function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.collapseDiv}>{props.name}</h3>
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
            <AccordionTitle name={props.name} collapseDiv={props.collapseDiv}/>
            {!props.collapsed && <AccordionBody/>}
        </div>

    )
}

export default Accordion;
