import React, {useRef} from 'react';

type OnOffPropsType = {
    status: boolean
    setStatus: (status: boolean) => void
}


export const OnOff = (props: OnOffPropsType) => {

    const onStyle = {
        width: '100px',
        height: '50px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.status ? 'green' : 'white'
    }
    const offStyle = {
        width: '100px',
        height: '50px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: !props.status ? 'red' : 'white'
    }
    const signal = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: '1px dashed black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.status ? 'green' : 'red'
    }


    const switcher = (status: boolean) => {
        props.setStatus(status)
    }

    return (
        <div>
            <button onClick={() => switcher(true)} style={onStyle}>On</button>
            <button onClick={() => switcher(false)} style={offStyle}>Off</button>
            <div style={signal}></div>
        </div>
    );
};