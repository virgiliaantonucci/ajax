import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import Login from "./Login.js";
import User from "./User.js";
import SignUp from './Signup.js';
import Header from "./Header.js";
import UserNav from "./UserNav.js";
import Home from "./Home.js";
import GrLevels from "./GrLevels"
import EngLevels from "./EngLevels"
import EngLevelSpecific from "./EngLevelSpecific"
import GrLevelSpecific from "./GrLevelSpecific"

function App() {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user")
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser)
      setUser(foundUser)
    }
  }, []);

    function handleLogin(user) {
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user))
      console.log(user)
    }
  
    function handleLogout() {
      navigate("/");
      setUser(null);
      console.log(null)
      localStorage.clear()

      for (let i = 1; i < 4; i++) {
        fetch("/reset/Level_"+i,{
          method: "PATCH",
          headers:{'Content-Type': 'application/json'},
        }).then((response) => {
            if (response.ok) {
                response.json().then((client) => {
                    console.log(client);
                })
            }
        })
      }
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
        <Route path="/grlevels" element={<GrLevels user={user}/>} />
        <Route path="/englevels" element={<EngLevels user={user}/>} />
        <Route path="/englevels/:levelNumber" element={<EngLevelSpecific user={user}/>} />
        <Route path="/grlevels/:levelNumber" element={<GrLevelSpecific user={user}/>} />
        <Route exact path="/" element={<Home user={user}/>} />
       </Routes>
    </div>
  );
}

export default App;
