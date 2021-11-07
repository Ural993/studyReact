import { useState } from "react"

type PropsType = {
    defaultOn?: boolean
}

export function UncontrolledOnOff(props: PropsType) {

    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)
    const onStyle = {
        width: '40px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '40px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'white' : 'red'


    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: on ? 'green' : 'red'

    }
    const onClickOff = () => {
        setOn(false)
    }
    const onClickOn = () => {
        setOn(true)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClickOn}>On</div>
            <div style={offStyle} onClick={onClickOff}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}


