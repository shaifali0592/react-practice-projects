import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function EditUser() {
    const[name , setName]= useState();
    const[age , setAge]= useState();
    const[email , setEmail]= useState();
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
getUserData();
    }, [])

const getUserData =async()=>{
    const url = "http://localhost:3000/users/"+id;
let response = await fetch(url);
response = await response.json();
setName(response.name);
setAge(response.age);
setEmail(response.email);


}
const updateData = async() =>{
    const url = "http://localhost:3000/users/"+id;
    let response = await fetch(url , {
        method: 'put',
        body : JSON.stringify({name, email, age})
    });
        
response = await response.json();
if(response){
    alert("user Updated");
    navigate('/');
}

}
return(
    <div>
        <h1>Edit User</h1>
        <input type="text"  value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter Name"></input><br /><br />
        <input type="text"  value={email} placeholder="Enter Email" onChange={(event)=>setEmail(event.target.value)}></input><br /><br />
        <input type="text" value={age} placeholder="Enter Age" onChange={(event)=>setAge(event.target.value)}></input><br /><br />
        <button onClick={updateData}>update User</button>
    </div>
)
}


export default EditUser;