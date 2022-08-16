import { useEffect, useState } from "react";

function EngLevel3() {

    const [levelData, setLevelData] = useState({});

    useEffect(() => {
        fetch("/levels?name=Level_3").then((response) => {
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

    return(
        console.log("hi")
    )
}
export default EngLevel3