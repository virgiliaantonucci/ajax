import { useEffect, useState } from "react";

function GrLevel2() {

    const [levelData, setLevelData] = useState({});

    useEffect(() => {
        fetch("/levels?name=Level_2").then((response) => {
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
export default GrLevel2