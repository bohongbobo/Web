import React, { useState, useEffect } from "react";
import "./SearchMeal.css";

const SearchMeal = () => {
  const [seachInput, setseachInput] = useState("");
  const [meals, setmeals] = useState([]);
  const [toShow, settoShow] = useState(false);

  const handleChange = (e) => {
    setseachInput(e.target.value);
    settoShow(true);
  };

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => {
        setmeals(data.meals);
      });
  }, []);

  const filteredPics = () => {
    const filteredPics = meals.filter((meal) =>
      meal.strMeal.toLowerCase().includes(seachInput.toLowerCase())
    );

    return filteredPics.map((meal) => (
      <div key={meal.idMeal}>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </div>
    ));
  };

  return (
    <div>
      <h3>Meal Finder</h3>
      <input id="seachInput" onChange={handleChange} />
      <div className="pics">{toShow === true && seachInput !== "" ? filteredPics() : ""}</div>
    </div>
  );
};

export default SearchMeal;
