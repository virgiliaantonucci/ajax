import { useEffect, useState } from "react";
import { useParams} from "react-router-dom"

function GrLevelSpecific() {

    const [grData, setGrData] = useState({});
    const [engData, setEngData] = useState({});
    const [levelData, setLevelData] = useState({});
    const [answer, setAnswer] = useState({});
    const {levelNumber} = useParams()

    useEffect(() => {
        fetch("/levels").then((response) => {
        if (response.ok) {
            response.json().then((client) => {
            setLevelData(client);
            console.log(client);
            });
        } else {
            console.log("Not rendering!");
        }
        });
    }, []);

    useEffect(() => {
        fetch("/grlevels").then((response) => {
        if (response.ok) {
            response.json().then((client) => {
            setGrData(client);
            console.log(client);
            });
        } else {
            console.log("Not rendering!");
        }
        });
    }, []);

    useEffect(() => {
        fetch("/grtoeng/"+levelNumber).then((response) => {
        if (response.ok) {
            response.json().then((client) => {
            setEngData(client);
            console.log(client);
            });
        } else {
            console.log("Not rendering!");
        }
        });
    }, []);

    function compare(e) {
       e.preventDefault()
       if (document.getElementById('pp')) {
            document.getElementById('pp').remove()
        }

        const result = document.createElement("p");
        result.setAttribute('id','pp');
        let result2 = ''
        const element = document.getElementById("div1");
        if (engData.includes(answer)) {
            result2 = "Correct!"

            fetch("/updatelevels/Level_"+levelNumber,{
                method: "PATCH",
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({"is_completed": true})
            }).then((response) => {
                if (response.ok) {
                    response.json().then((client) => {
                        console.log(client);
                    })
                }
            })

            // const btn = document.getElementsByClassName("lvl1");
            // btn.color = "success";
            // console.log(btn)
        }

        else{
            result2 = "Incorrect!"
        }
        result.innerText = result2
        element.appendChild(result)
    }

    return(
        <div id="div1">
            <h2>
                {levelData.length>0 ? levelData.find(x=>x.id==levelNumber).name : ""}
            </h2>
            <p>
                {grData.length>0 ? grData.find(x=>x.id==levelNumber).walkthru : ""}
            </p>
            <form onSubmit={e => compare(e)}>
                <input placeholder="answer here" type="text" onChange={e => setAnswer(e.target.value)}/>
            </form>
        </div>
    )
}
export default GrLevelSpecific