import React, { useState } from 'react';
import { action } from '@storybook/addon-actions'

import { Select } from './Select';
import { ComponentStory } from '@storybook/react';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export





export default {
    title: 'Select stories',
    component: Select
}



export const SelectStories = () => {
    let [selectValue, setSelectValue] = useState('none')
    let [collapsed, setCollapsed] = useState<boolean>(false)
    const onChange = (title: any) => {
        setSelectValue(title)
        setCollapsed(false)
    }
    return <Select value={selectValue} onChange={onChange} collapsed={collapsed} onChangeCollapsed={() => setCollapsed(!collapsed)} items={[
        { title: 'Ural', value: 1 },
        { title: 'Maxim', value: 2 },
        { title: 'Vova', value: 3 },
    ]} />
}