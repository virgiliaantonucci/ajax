import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import Login from "./Login.js";
import User from "./User.js";
import SignUp from './Signup.js';
import Header from "./Header.js";
import UserNav from "./UserNav.js";


function App() {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((client) => {
          setUser(client);
          console.log(client);
        });
      } else {
        console.log("Not rendering!");
      }
    });
  }, []);

    function handleLogin(user) {
      setUser(user);
      console.log(user)
    }
  
    function handleLogout() {
      navigate("/");
      setUser(null);
      console.log(null)
    }

    function deleteUser() {
      setUser(null);
      navigate("/");
    }

  return (
    <div className="App">
       <Header user={user} onLogout={handleLogout} />
       {user ? <UserNav/> : null}
       <Routes>
       {/* <Route exact path="/" element={<Home user = {user} />}/> */}
       <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user" element={<User user={user} deleteUser={deleteUser} />} />
       </Routes>
    </div>
  );
}

export default App;
