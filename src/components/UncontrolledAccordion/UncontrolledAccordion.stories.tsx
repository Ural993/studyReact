import React, { useState } from 'react';
import { action } from '@storybook/addon-actions'

import { UncontrolledAccordion } from './UncontrolledAccordion';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UncontrolledAccordion stories',
    component: UncontrolledAccordion
}

export const CangeRating = () => {
    return <UncontrolledAccordion titleValue={'Menu'} />
}

