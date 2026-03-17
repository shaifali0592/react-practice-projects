import Boardsheeet from "./TicTacToe/Boardsheeet";
import './App.css'
import { Routes, Route } from "react-router";
import Header from "./Header";
import RandomColor from "./TicTacToe/RandomColor";
import Products from "./Products/Products";
import ProductDetails from "./Products/ProductDetails";
import UsersList from "./users/usersList";
import AddNewUser from "./users/AddNewUser";
import UserEdit from "./users/UserEdit";

function App() {
  return (

    <>
      <Header />
      <Routes>
        <Route path="/" element={<Boardsheeet />}>Tic-Tac-Toe</Route>
        <Route path="/random-color-generator" element={<RandomColor />}>Random Color Generator</Route>
        <Route path="/products" element={<Products />}>Products</Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
         <Route path="/users-list" element={<UsersList/>}>Users List</Route>
         
          <Route path="/add-user" element={<AddNewUser/>}>Add New User</Route>
            <Route path="/user-edit/:id" element={<UserEdit/>}></Route>
      

      </Routes>




    </>
  )
}

export default App;