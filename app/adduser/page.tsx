'use client'
import addUser from '../actions/adduser'
import { useState } from 'react'
import axios from 'axios';
export default function(){
    const [name,Setname] = useState('');
    async function addUserToDb(){
            await addUser(name);
            if (name){
                alert(`User saved in db ${name}`)
            }
        }
//      async function addUserToDb() {
//     try {
      
//       const result = await axios.post("http://localhost:3000/api/adduser",{name})
//       if (result){
//         alert(`User saved in DB: ${name}`);
//       } else {
//         alert('Failed to save user');
//       }
//     } catch (err) {
//       console.error(err);
//       alert('Something went wrong');
//     }
//   }
    return(
      <div>
         <input placeholder="Enter Name" onChange={(e)=>Setname(e.target.value)}></input>
            <button onClick={addUserToDb}>Add User</button>
      </div>
           
       
       
       
    )
}