import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useEffect, useState } from "react"

function GrLevels() {

    const navigate = useNavigate();

    function handleGrLevel(levelNumber) {
      navigate('/grlevels/'+levelNumber);
    }
  
    const [completed, setCompleted] = useState({});
    let color1 = "primary"
    let color2 = "primary"
    let color3 = "primary"
    let btn1 = "outlined"
    let btn2 = "outlined"
    let btn3 = "outlined"

        useEffect(() => {
            fetch("/levels").then((response) => {
            if (response.ok) {
                response.json().then((client) => {
                setCompleted(client);
                console.log(client);
                });
            } else {
                console.log("Not rendering!");
            }
            });
        }, []);
        console.log(completed)

        if (completed.length>0) {
            
            if (completed.find(x=>x.id==1).is_completed) {
                color1 = "success"
                btn1 = "contained"
            }
            if (completed.find(x=>x.id==2).is_completed) {
                color2 = "success"
                btn2 = "contained"
            }
            if (completed.find(x=>x.id==3).is_completed) {
                color3 = "success"
                btn3 = "contained"
            }
         }
    
         return(
            <div>
                <Button variant={btn1} color={color1} onClick={function(){handleGrLevel(1)}}>Level 1
                </Button>
                <Button variant={btn2} color={color2} onClick={function(){handleGrLevel(2)}}>Level 2
                </Button>
                <Button variant={btn3} color={color3} onClick={function(){handleGrLevel(3)}}>Level 3
                </Button>
            </div>
        )
    }

export default GrLevels