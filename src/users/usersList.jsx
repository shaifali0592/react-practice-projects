import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

function UsersList() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
   

    const fetchusers = async () => {
        const url = "http://localhost:3000/users";
        let response = await fetch(url);
        response = await response.json();
        setUsers(response);
    }

    useEffect(() => {
        fetchusers();
    }, [])

    const handleDelete=async(id)=> {
      const  url= "http://localhost:3000/users/" + id;
      let data = await fetch(url, {method: "delete"});
      data = await data.json();
       alert("User Deleted Successfully...");
        fetchusers();
    }

    const handleEdit =(id)=>{
        navigate("/user-edit/"+id);
    }


    return (
        <div className="users-container" style={{textAlign:"center"}}>
            <Link className="Adduser" to="/add-user">Add New User</Link>
            <ul className="user-listing" >
                    <li>ID</li>
                    <li>Name</li>
                    <li>EMAIL</li>
                    <li>AGE</li>
                       <li>ACTION</li>
                
            </ul>
            {users.map(user => (
                <ul className="user-listing" key={user.id}>
                    <li>{user.id}</li>
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                    <li>{user.age}</li>
                      <li>
                        <button onClick={()=>handleDelete(user.id)} style={{backgroundColor: "red", color: "white", marginRight:'10px'}}>Delete</button>
                         <button onClick={()=>handleEdit(user.id)} style={{backgroundColor: "blue", color: "white"}}>Edit</button>
                    </li>
                
            </ul>
                )
            

            )}
        </div>

    )
}

export default UsersList;