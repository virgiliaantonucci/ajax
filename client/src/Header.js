import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import {Routes, Route, useNavigate} from 'react-router-dom';

function Header({ user, onLogout }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  const navigate = useNavigate();

  function handleGreek() {
    navigate('/grlevels');
  }

  function handleEnglish() {
    navigate('/englevels');
  }

  return (
    <header>
      <br>
      
      </br>
      {user ? null: <Link to="signup">
      <Button variant="outlined" style={{color:"#000000"}}>Signup</Button>
      </Link>}

      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <Button variant="outlined" style={{color:"#000000"}} onClick={handleLogout}>Logout
          </Button>
          <br>
          </br>
          <Button variant="outlined" style={{color:"#000000"}} onClick={handleGreek}>Greek to English
          </Button>
          <Button variant="outlined" style={{color:"#000000"}} onClick={handleEnglish}>English to Greek
          </Button>
        </div>
      ) : (
        <Link to="/login">
          <Button variant="outlined" style={{color:"#000000"}}>Login</Button>
        </Link>
      )}

      <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700display=swap"
      />

    </header>
  );
}

export default Header;