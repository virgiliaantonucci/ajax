import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function GrLevels() {

    const navigate = useNavigate();

    function handleGrLevel(levelNumber) {
      navigate('/grlevels/'+levelNumber);
    }
  
    return(
        <div>
            <Button variant="outlined" style={{color:"#000000"}} onClick={function(){handleGrLevel(1)}}>Level 1
            </Button>
            <Button variant="outlined" style={{color:"#000000"}} onClick={function(){handleGrLevel(2)}}>Level 2
            </Button>
            <Button variant="outlined" style={{color:"#000000"}} onClick={function(){handleGrLevel(3)}}>Level 3
            </Button>
        </div>
    )
}

export default GrLevels