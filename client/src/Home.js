//import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

function Home({ user }) {
//  const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     fetch("/recipes")
//       .then((r) => r.json())
//       .then((r) => {
//           setRecipes(setFeatured(r));
//         console.log(r);
//       });
//   }, []);

//   function setFeatured(r) {
//     let newArr = [...r].sort(() => 0.5 - Math.random());
//     return newArr.slice(0, 2);
//   }

  return (
    <div>
      <h2>learn a language</h2> 
      <Grid container spacing={2}>
        {/* {recipes.map((recipe) => (
           <Grid item xs={6} key={recipe.id}>
             <Recipe key={recipe.id} recipe={recipe} edit={false} user={user} />
           </Grid>
        ))} */}
      </Grid>
    </div>
  );
}

export default Home;