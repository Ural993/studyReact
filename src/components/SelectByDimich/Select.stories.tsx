import React, { useState } from 'react';
import { action } from '@storybook/addon-actions'

import { Select } from './Select';
import { ComponentStory } from '@storybook/react';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export





export default {
    title: 'Select stories',
    component: Select
}



export const SelectWithValue = () => {
    let [value, setValue] = useState('2')
    return <Select value={value} onChange={setValue} items={[
        { title: 'Ural', value: '1' },
        { title: 'Maxim', value: '2' },
        { title: 'Vova', value: '3' },
    ]} />
}


export const SelectWithoutValue = () => {
    let [value, setValue] = useState(null)
    return <Select onChange={setValue} items={[
        { title: 'Ural', value: 1 },
        { title: 'Maxim', value: 2 },
        { title: 'Vova', value: 3 },
    ]} />
}