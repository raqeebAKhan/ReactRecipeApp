import './App.css';
import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import { FaUtensils } from "react-icons/fa";



function App() {
  const [recipes, setrecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  
  

 const APP_ID = "82e86bf0";
 const APP_KEY = "446705026b6606983607169d0a6672fe";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  async function getRecipes() {
    const result = await fetch(url);
    const data = await result.json();
    setrecipes(data.hits);
  }

  useEffect(() => {
     getRecipes();
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="app">
      <h1 style={{color: "purple"}}><FaUtensils/>RAK</h1>
      <h3 style={{color: "purple"}} >Recipes</h3>
      <form onSubmit={getSearch} className="search_box">
        <input type="text" className="app_input" placeholder="Search Item" value={search} onChange={updateSearch}/>

        <input className="app_submit" type="submit" value="Search"></input>
        
      </form>

      <div className='recepies'>
        {recipes.map(recipe => (
          <Recipe 
          key={recipe.recipe.label}
          image={recipe.recipe.image}
          title={recipe.recipe.label}
          time={recipe.recipe.totalTime}
          url={recipe.recipe.url}
          cuisineType={recipe.recipe.cuisineType}
        />
        ))}
      </div>
      </div>
  );
}

export default App;
