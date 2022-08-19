import { useEffect, useState } from "react";

function EngLevel1() {

    const [engData, setEngData] = useState({});
    const [grData, setGrData] = useState({});
    const [levelData, setLevelData] = useState({});
    const [answer, setAnswer] = useState({});

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
        fetch("/englevels").then((response) => {
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

    useEffect(() => {
        fetch("/engtogr1").then((response) => {
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

    function compare(e) {
       e.preventDefault()
       if (document.getElementById('pp')) {
            document.getElementById('pp').remove()
        }

        const result = document.createElement("p");
        result.setAttribute('id','pp');
        let result2 = ''
        const element = document.getElementById("div1");
        if (grData.includes(answer)) {
            result2 = "Correct!"

            fetch("/updatelevels/Level_1").then((response) => {
                if (response.ok) {
                    response.json().then((client) => {
                        console.log(client);
                    })
                }
            })
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
                {levelData.length>0 ? levelData[0].name : ""}
            </h2>
            <p>
                {engData.length>0 ? engData[0].walkthru : ""}
            </p>
            <form onSubmit={e => compare(e)}>
                <input placeholder="answer here" type="text" onChange={e => setAnswer(e.target.value)}/>
            </form>
        </div>
    )
}
export default EngLevel1