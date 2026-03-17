import { useState } from "react";
import { useNavigate } from "react-router";

function AddUser() {

    const [name , setName]= useState();
    const [email , setEmail]= useState();
    const [age , setAge]= useState();
    const navigate = useNavigate();

    const addUsers = async()=>{
        const url = "http://localhost:3000/users";
        let response = await fetch(url, {
            method: "post",
            body : JSON.stringify({name , age , email})

        });
        response = await response.json();
        if(response){
alert ("user Added ");
navigate('/');
        }
        
        
    }
return(
    <div>
        <h1>Add User</h1>
<input type="text" onChange={(event)=>setName(event.target.value)} placeholder="Enter Name"></input> <br /><br />
     <input type="text" onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Email"></input> <br /><br />
<input type="text" onChange={(event)=>setAge(event.target.value)} placeholder="Enter Age"></input> <br /><br />
<button onClick={addUsers}>Add User</button>
  
    </div>
)
}


export default AddUser;