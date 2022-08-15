import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import { Grid } from "@mui/material";

function LevelName({ user }) {
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    fetch("/levels")
      .then((r) => r.json())
      .then((r) => {
        setLevels(r);
        console.log(r);
      });
  }, []);

  return (
    <div>
        <Level.name />
    </div>
  );
}

export default LevelName;