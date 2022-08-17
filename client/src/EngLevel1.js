import { useEffect, useState } from "react";

function EngLevel1() {

    const [data, setData] = useState({});

    const [levelData, setLevelData] = useState({});

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
            setData(client);
            console.log(client);
            });
        } else {
            console.log("Not rendering!");
        }
        });
    }, []);

    return(
        <div>
            <h2>
                {levelData[0].name}
            </h2>
            <p>
                {data[0].walkthru}
            </p>
            <form>
                <input type="text" />
            </form>
        </div>
    )
}
export default EngLevel1