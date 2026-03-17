import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddNewUser(){
    const[name,setName] = useState();
    const[email,setEmail] = useState();
    const[age,setAge] = useState();
    const navigate = useNavigate();

    const addNewUser = async()=>{
   const url="http://localhost:3000/users";
   let response = await fetch(url , {
    method: "post",
    body : JSON.stringify({name, email, age})
   });
   response = response.json();
   if(response){
     alert("User Added Successfully...");
navigate("/users-list");
   }

    }

    return(
        <div className="add-user-page" style={{textAlign:"center", margin: "30px auto"}}>
            <input type="text"  onChange={(event)=>setName(event.target.value)} placeholder="Enter Name" /><br /><br />
             <input type="email"  onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Email" /><br /><br />
              <input type="text"  onChange={(event)=>setAge(event.target.value)}  placeholder="Enter Age" /><br /><br />
              <button onClick={addNewUser} className="Adduser">Add New User</button>
        </div>
    )
}

export default AddNewUser;