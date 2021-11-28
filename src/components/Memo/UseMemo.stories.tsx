import React, {ChangeEvent, useMemo, useState} from 'react';


export default {
    title: 'UseMemo demo'
}


export const DificultCountingExample = () => {
    let [a, setA] = useState<number>(0)
    let [b, setB] = useState<number>(0)
    let resultA = 1
    let resultB = 1
    resultA = useMemo(() => {
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            resultA = resultA * i

        }
        return resultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return (
        <>
            <input value={a} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setA(Number(e.currentTarget.value))
            }}/>
            <input value={b} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setB(+e.currentTarget.value)
            }}/>
            <hr/>
            <div>Resalt for a:{resultA}</div>
            <div>Resalt for b:{resultB}</div>
        </>
    )
}






const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const HelpToReactMemo = () => {
    console.log('HelpToReactMemo')
    let [count, setCount] = useState(0)
    let [users, setUsers] = useState(['Dimich', 'Ural', 'Vova', 'Diar'])
    let newArray = useMemo(()=>{
        let newArray= users.filter(u=>u.toLowerCase().indexOf('a')>-0)
            return newArray
    },[users])

    const addUser = ()=>{
        const newUsers = [...users, 'Sveta']
        setUsers(newUsers)
    }
    return (
        <>
            <button onClick={() => setCount(count + 1)}>+</button>
            {count}
            <button onClick={() => addUser()}>AddUser</button>
            <Users users={newArray} />
            {/*<Users users={users} />*/}
        </>
    )
}