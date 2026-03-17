import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function UserList() {

    const [data, setData]= useState([]);
    const navigate = useNavigate();
 
    

useEffect(()=>{
getUsersData();
    }, [])

const getUsersData = async() => {
       const url ="http://localhost:3000/users";
    let response = await fetch(url);
    response = await response.json();
    setData(response);

    console.log(response);

            
}

const deleteUser =async(id) => {
      const url ="http://localhost:3000/users/" + id;
      console.log(url);
let response = await fetch(url , {
    method : 'delete'
});
    response = await response.json();
    console.log(url);
    getUsersData();

}

const editUser =(id) => {
    
navigate("/edit/" + id);
}
return(
    <div>
        <h2>Users List</h2>
        {
            data.map((item, index)=>(
                <ul key={index} className="userlist-row">
                    <li>{item.name}</li>
                     <li>{item.email}</li>
                      <li>{item.age}</li>
                       <li><button onClick={() => deleteUser(item.id)}>Delete</button>
                       <button onClick={() => editUser(item.id)}>Edit</button></li>
                </ul>
            )
        )
        }

     
        
    </div>
)
}


export default UserList;