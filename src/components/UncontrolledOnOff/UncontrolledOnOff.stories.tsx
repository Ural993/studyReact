import React, { useState } from 'react';
import { action } from '@storybook/addon-actions'

import { UncontrolledOnOff } from './UncontrolledOnOff';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UncontrolledOnOff stories',
    component: UncontrolledOnOff
}
const callback = action('on or off clicked')
export const onMode = () => <UncontrolledOnOff defaultOn={true} />
export const offMode = () => <UncontrolledOnOff defaultOn={false} />


