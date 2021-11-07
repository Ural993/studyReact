import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';

import { UncontrolledRating } from './UncontrolledRating';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UncontrolledRating stories',
    component: UncontrolledRating
}
const callback = action('rating changed insaide component')
export const Rating0 = () => <UncontrolledRating defaultValue={0} onChange={callback} />
export const Rating1 = () => <UncontrolledRating defaultValue={1} onChange={callback} />
export const Rating2 = () => <UncontrolledRating defaultValue={2} onChange={callback} />
export const Rating3 = () => <UncontrolledRating defaultValue={3} onChange={callback} />
export const Rating4 = () => <UncontrolledRating defaultValue={4} onChange={callback} />
export const Rating5 = () => <UncontrolledRating defaultValue={5} onChange={callback} />


