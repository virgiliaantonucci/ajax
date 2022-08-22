import { Grid } from "@mui/material";
import Ajax from "./ajax.png"

function Home({ user }) {

  return (
    <div>
      <h2>AJAX</h2> 
      <Grid container spacing={2}>
      </Grid>
      <img src={Ajax} alt="Ajax"></img>
    </div>
  );
}

export default Home;