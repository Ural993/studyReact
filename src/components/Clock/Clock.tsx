import {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView/DigitalClockView";
import {AnalogClockView} from "./AnalogClockView/AnalogClockView";

type PropsType = {
    mode?: 'digital' | 'analog'
}
export const Clock: React.FC<PropsType> = (props: PropsType) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const setIntervalId = setInterval(() => {
            // console.log('tik')
            setDate(new Date())
        }, 1000);
        return () => {
            clearInterval(setIntervalId)
        }
    }, [])

    return (
        <div>
            {
                props.mode === 'digital' ? <DigitalClockView date={date}/>
                    : <AnalogClockView date={date}/>
            }

        </div>
    )
}
