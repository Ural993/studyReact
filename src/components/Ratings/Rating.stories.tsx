import React, { useState } from 'react';

import { RaitingValueType, Rating } from './Rating';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Rating stories',
    component: Rating
}

export const EmptyStar = () => <Rating value={0} onClick={() => { }} />
export const Rating1 = () => <Rating value={1} onClick={() => { }} />
export const Rating2 = () => <Rating value={2} onClick={() => { }} />
export const Rating3 = () => <Rating value={3} onClick={() => { }} />
export const Rating4 = () => <Rating value={4} onClick={() => { }} />
export const Rating5 = () => <Rating value={5} onClick={() => { }} />
export const CangeRating = () => {
    let [rating, setRating] = useState<RaitingValueType>(5)
    return <Rating value={rating} onClick={setRating} />
}

