import {useEffect, useState} from "react";

type PropsType = {}
export const Clock: React.FC<PropsType> = () => {
   const [date, setDate] = useState(new Date())
    useEffect(()=>{
        const setIntervalId = setInterval(()=>{
           // console.log('tik')
            setDate(new Date())
        },1000);
        return ()=>{
            clearInterval(setIntervalId)
        }
    },[])
    const get2string = (num:number)=>num <10?'0'+num :num
    return (
        <div>
            <span>{get2string(date.getHours())}</span>
            :<span>{get2string(date.getMinutes())}</span>
            :<span>{get2string(date.getSeconds())}</span>
        </div>
    )
}