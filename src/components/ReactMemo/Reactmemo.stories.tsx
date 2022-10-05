import React, {useState} from "react";

export default {
    title: "React.memo demo"
}

const NewMessagesCounter = (props:any) => {
  return <div>{props.count}</div>
}

const UsersSecret = (props: { users: string[] }) => {
    console.log("rendered")
    return <div>{props.users.map((u,index)=><div key={index}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Vitya", "Oleg", "Nikolai", "Tanya"])
  return <>
      <button onClick={()=>{setCounter(counter+1)}}>+</button>
    <NewMessagesCounter count={counter} />
      <Users users={users} />
  </>
}