import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function EngLevels() {

    const navigate = useNavigate();

    function handleEngLevel1() {
      navigate('/englevels/englevel1');
    }
  
    function handleEngLevel2() {
      navigate('/englevels/englevel2');
    }

    function handleEngLevel3() {
        navigate('/englevels/englevel3');
      }

    return(
        <div>
            <Button className="lvl1" variant="outlined" style={{color:"#000000"}} onClick={handleEngLevel1}>Level 1
            </Button>
            <Button variant="outlined" style={{color:"#000000"}} onClick={handleEngLevel2}>Level 2
            </Button>
            <Button variant="outlined" style={{color:"#000000"}} onClick={handleEngLevel3}>Level 3
            </Button>
        </div>
    )
}

export default EngLevels