import React, { useState } from 'react';
import { action } from '@storybook/addon-actions'

import { Accordion } from './Accordion';
import { ComponentStory } from '@storybook/react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;
export const MenuCollapsedMode = Template.bind({})
const callback = action('accordion mode change event fier')
MenuCollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: true,
    onChange: callback
}
export default {
    title: 'Accordion stories',
    component: Accordion
}

export const MenuUncollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={false} onChange={callback}
    onClick={callback}
    items={[
        { title: 'Ural', value: 1 },
        { title: 'Maxim', value: 2 },
        { title: 'Vova', value: 3 },
    ]} />

export const CangeRating = () => {
    let [collapsed, setCollapsed] = useState<boolean>(true)
    return <Accordion titleValue={'Menu'} onChange={() => setCollapsed(!collapsed)} collapsed={collapsed}
        onClick={callback}
        items={[
            { title: 'Ural', value: 1 },
            { title: 'Ural', value: 2 },
            { title: 'Ural', value: 3 },
        ]} />
}

