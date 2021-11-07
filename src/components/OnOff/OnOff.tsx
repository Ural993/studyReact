import { useState } from "react"

type PropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

export function OnOff(props: PropsType) {

    const onStyle = {
        width: '40px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '40px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'white' : 'red'


    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: props.on ? 'green' : 'red'

    }


    return (
        <div>
            <div style={onStyle} onClick={() => props.onChange(true)}>On</div>
            <div style={offStyle} onClick={() => props.onChange(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}


