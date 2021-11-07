import React, { useState } from 'react';
import { action } from '@storybook/addon-actions'

import { OnOff } from './OnOff';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'OnOff stories',
    component: OnOff
}
const callback = action('on or off clicked')
export const onMode = () => <OnOff on={true} onChange={callback} />
export const offMode = () => <OnOff on={false} onChange={callback} />

export const CangeRating = () => {
    let [on, setOn] = useState<boolean>(true)
    return <OnOff on={on} onChange={setOn} />
}

