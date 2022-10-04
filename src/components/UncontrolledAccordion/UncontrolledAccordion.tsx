import React, {useState} from "react";

type AccordionPropsType = {
    name: string,
}

type AccordionTitlePropsType = {
    name: string
    onClickHandler: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>{props.name}<span onClick={props.onClickHandler}>&#9660;</span></h3>
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

function UncontrolledAccordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(true)
    let onClickHandler = () => {
        setCollapsed(!collapsed)
    }
    return (
        <div>
            <AccordionTitle name={props.name} onClickHandler={onClickHandler}/>
            {!collapsed && <AccordionBody/>}
        </div>

    )

}

export default UncontrolledAccordion;
