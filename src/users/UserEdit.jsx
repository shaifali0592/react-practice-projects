import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";



function UserEdit() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        fetchuserdata();
    }, [])

    const fetchuserdata = async () => {
        const url = "http://localhost:3000/users/" + id;
        let data = await fetch(url);
        data = await data.json();
        setName(data.name);
        setEmail(data.email);
        setAge(data.age);

    }
const handleUpdate = async()=>{
     const url = "http://localhost:3000/users/" + id;
      let data = await fetch(url , {
        method: "put",
        body: JSON.stringify({name,email,age})
      });
      data = data.json();
      if(data){
        alert("User Updated Successfully!....");
 navigate("/users-list");
      }
     
    
}


    return (
        <div className="User-Edit-page" style={{ textAlign: "center", margin: "30px auto" }}>
            <input value={name} onChange={(event)=>setName(event.target.value)} type="text" placeholder="Enter Name" /><br /><br />
            <input value={email} onChange={(event)=>setEmail(event.target.value)} type="email" placeholder="Enter Email" /><br /><br />
            <input value={age} type="text" onChange={(event)=>setAge(event.target.value)}  placeholder="Enter Age" /><br /><br />
            <button onClick={handleUpdate} className="Edituser">Update User Data</button>
        </div>
    )
}

export default UserEdit;