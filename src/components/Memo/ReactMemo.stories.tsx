import React, { useState } from 'react';


export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}


const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const Example = () => {
    let [count, setCount] = useState(0)
    let [users, setUsers] = useState(['Dimich', 'Ural', 'Vova', 'Diar'])
    return (
        <>
            <button onClick={() => setCount(count + 1)}>+</button>
            <NewMessagesCounter count={count} />
            <Users users={users} />
        </>
    )
}