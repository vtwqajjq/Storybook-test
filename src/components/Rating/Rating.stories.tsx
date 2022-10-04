import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Rating  from './Rating';

export default {
    title: 'Rating stories',
    component: Rating,
}

export const EmptyStars = () => <Rating rating={0} />
export const Rating1 = () => <Rating rating={1} />
export const Rating2 = () => <Rating rating={2} />
export const Rating3 = () => <Rating rating={3} />
export const Rating4 = () => <Rating rating={4} />
export const Rating5 = () => <Rating rating={5} />


