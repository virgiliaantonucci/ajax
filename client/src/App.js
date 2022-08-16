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
import GrLevel1 from "./GrLevel1"
import GrLevel2 from "./GrLevel2"
import GrLevel3 from "./GrLevel3"
import EngLevel1 from "./EngLevel1"
import EngLevel2 from "./EngLevel2"
import EngLevel3 from "./EngLevel3"

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
        <Route path="/grlevels" element={<GrLevels user={user}/>} />
        <Route path="/grlevels/grlevel1" element={<GrLevel1 user={user}/>} />
        <Route path="/grlevels/grlevel2" element={<GrLevel2 user={user}/>} />
        <Route path="/grlevels/grlevel3" element={<GrLevel3 user={user}/>} />
        <Route path="/englevels" element={<EngLevels user={user}/>} />
        <Route path="/englevels/englevel1" element={<EngLevel1 user={user}/>} />
        <Route path="/englevels/englevel2" element={<EngLevel2 user={user}/>} />
        <Route path="/englevels/englevel3" element={<EngLevel3 user={user}/>} />
        <Route exact path="/" element={<Home user={user}/>} />
       </Routes>
    </div>
  );
}

export default App;
