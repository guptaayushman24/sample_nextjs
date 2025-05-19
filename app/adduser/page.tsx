'use client'
import addUser from '../action/adduser'
import { useState } from 'react'
export default function(){
    const [name,Setname] = useState('');
    async function addUserindb(){
            await addUser(name);
        }
    return(
        <div>
            <input placeholder="Enter Name" onChange={(e)=>Setname(e.target.value)}></input>
            <button onClick={addUserindb}>Add User</button>
        </div>
    )
}