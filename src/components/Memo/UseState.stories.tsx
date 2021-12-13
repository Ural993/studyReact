import React, { useState } from 'react';


export default {
    title: 'useState demo'
}
function generateData(){
    console.log('generateData')
    return 1
}

export const Example = () => {
    console.log('Example')
    let [count, setCount] = useState(generateData)

    const changer =(state:number)=>{
        return state+1
    }
    return (
        <>
            <button onClick={() => setCount(changer)}>+</button>
            {count}
        </>
    )
}