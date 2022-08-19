import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function EngLevels() {

    const navigate = useNavigate();

    function handleEngLevel(levelNumber) {
      navigate('/englevels/'+levelNumber);
    }

    return(
        <div>
            <Button className="lvl1" variant="outlined" style={{color:"#000000"}} onClick={function(){handleEngLevel(1)}}>Level 1
            </Button>
            <Button variant="outlined" style={{color:"#000000"}} onClick={function(){handleEngLevel(2)}}>Level 2
            </Button>
            <Button variant="outlined" style={{color:"#000000"}} onClick={function(){handleEngLevel(3)}}>Level 3
            </Button>
        </div>
    )
}

export default EngLevels