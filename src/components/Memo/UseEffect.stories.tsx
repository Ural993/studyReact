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
    let [counter, setCount] = useState(1)
    useEffect(()=>{
        setInterval(()=>{
            setCount(state=>state+1)
        },1000)
    },[])

    return (
        <>
            Hello {counter}
            {/*<button onClick={() => setCount(counter+1)}>+</button>*/}

        </>
    )
}