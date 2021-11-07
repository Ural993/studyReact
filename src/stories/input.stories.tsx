import React, { ChangeEvent, useRef, useState } from 'react';
import { action } from '@storybook/addon-actions'


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'input',
    // component: OnOff
}
//const callback = action('on or off clicked')
export const UncontrolledInput = () => <input />

export const TrackValueOfUncontrolledInput = () => {

    let [value, setValue] = useState('')
    let onChange = (e: ChangeEvent<HTMLInputElement>) => {
        let actualValue = e.currentTarget.value;
        setValue(actualValue)
    }

    return <><input onChange={onChange} /> {value} </>
}

export const GetValueOfUncontrolledInputByPressButton = () => {

    let [value, setValue] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const buttonHandler = () => {
        let el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input ref={inputRef} /> -actual value:{value}
        <div><button onClick={buttonHandler}>save</button></div></>
}


export const ControlledInput = () => {

    let [value, setValue] = useState('')

    let onChange = (e: ChangeEvent<HTMLInputElement>) => {
        let actualValue = e.currentTarget.value;
        setValue(actualValue)
    }

    return <input value={value} onChange={onChange} />
}

export const ControlledCheckbox = () => {

    let [value, setValue] = useState(true)

    let onChange = (e: ChangeEvent<HTMLInputElement>) => {
        let actualValue = e.currentTarget.checked;
        setValue(actualValue)
    }

    return <input type='checkbox' checked={value} onChange={onChange} />
}

export const ControlledSelect = () => {

    let [value, setValue] = useState<string | undefined>(undefined)

    let onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        let actualValue = e.currentTarget.value;
        setValue(actualValue)
    }

    return <select value={value} onChange={onChange}>
        <option >none</option>
        <option value={1}>Moscow</option>
        <option value={2}>Minsk</option>
        <option value={3}>Kiev</option>
    </select>
}


