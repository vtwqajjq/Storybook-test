import React, {ChangeEventHandler, useState} from 'react';
import {Simulate} from "react-dom/test-utils";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Controlled Input',
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')

    return <input value={parentValue} onChange={(e)=>{setParentValue(e.currentTarget.value)}}/>

}
