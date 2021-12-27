import React, {useEffect, useState} from 'react';


export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    console.log('Example')
    let [counter, setCount] = useState(1)
    useEffect(()=>{
        console.log('useEffect')
        document.title = counter.toString()

    })
    return (
        <>
           Hello {counter}
            <button onClick={() => setCount(counter+1)}>+</button>

        </>
    )
}

export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample')
    let [hour, setHour] = useState(0)
    let [sec, setSec] = useState(0)
    let [min, setMin] = useState(0)
    useEffect(()=>{
       let id =  setInterval(()=>{
            console.log('tik')
            let hour = new Date().getHours()
            setHour(hour)
            let min = new Date().getMinutes()
            setMin(min)
            let sec = new Date().getSeconds()
            setSec(sec)
        },1000)
        return ()=>{
            clearInterval(id)
        }
    },[])

    return (
        <>
            Time  = {hour}:{min}:{sec}
            {/*<button onClick={() => setCount(counter+1)}>+</button>*/}

        </>
    )
}
export const ResetEffect = () => {
    let [counter, setCount] = useState(1)
    console.log('Component rendered')
    useEffect(()=>{
        console.log('Useeffect occurred')
    },[])

    return (
        <>
            Hello {counter}
            <button onClick={() => setCount(counter+1)}>+</button>
        </>
    )
}
export const KeyTrackerExample = () => {
    let [text, setText] = useState('')
    console.log('Component render with' + text)

    useEffect(()=>{
        const handler = (e:KeyboardEvent)=>{
            console.log(e.key)
            setText((state)=>state + e.key)
        }
        window.addEventListener('keypress',handler )
     return ()=>{
          window.removeEventListener('keypress',handler)
     }
    },[])

    return (
        <>
       Typed text: {text}
        </>
    )
}