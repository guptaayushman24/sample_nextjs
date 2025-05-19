'use client'
import addUser from '../action/adduser'
import { useState } from 'react'
import { useRef } from 'react';
const formRef = useRef<HTMLFormElement>(null);
export default function(){
    const [name,Setname] = useState('');
    // async function addUserindb(){
    //         await addUser(name);
    //         if (name){
    //             alert(`User saved in db ${name}`)
    //         }
    //     }
     async function addUserToDb() {
    try {
      const res = await fetch('/api/adduser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      });

      const data = await res.json();

      if (data.success) {
        alert(`User saved in DB: ${data.user.name}`);
      } else {
        alert('Failed to save user');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    }
  }
    return(
      <div>
         <input placeholder="Enter Name" onChange={(e)=>Setname(e.target.value)}></input>
            <button onClick={addUserToDb}>Add User</button>
      </div>
           
       
       
       
    )
}