import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {OnOff}  from './OnOff';
import {action} from "@storybook/addon-actions";

export default {
    title: 'On Off',
    component: OnOff,
}

const callBack = action('on or off clicked')

export const OnMode = () => <OnOff status={true} setStatus={callBack} />
export const OffMode = () => <OnOff status={false} setStatus={callBack} />
export const OnOffModeChanger = () => {
    const [value, setValue] = useState(true);
    return <OnOff status={value} setStatus={setValue} />
}


