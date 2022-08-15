import { Routes, Route, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function GrLevels() {

    const navigate = useNavigate();

    function handleGrLevel1() {
      navigate('/grlevels/grlevel1');
    }
  
    function handleGrLevel2() {
      navigate('/grlevels/grlevel2');
    }

    function handleGrLevel3() {
        navigate('/grlevels/grlevel3');
      }

    return(
        <div>
            <Button variant="outlined" style={{color:"#000000"}} onClick={handleGrLevel1}>Level 1
            </Button>
            <Button variant="outlined" style={{color:"#000000"}} onClick={handleGrLevel2}>Level 2
            </Button>
            <Button variant="outlined" style={{color:"#000000"}} onClick={handleGrLevel3}>Level 3
            </Button>
        </div>
    )
}

export default GrLevels