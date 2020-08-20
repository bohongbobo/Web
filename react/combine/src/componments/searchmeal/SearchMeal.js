import React, { Component } from "react";
import "./SearchMeal.css";

export default class SearchMeal extends Component {
  state = {
    seachInput: "",
    meals: [],
    toShow: false,
  };
  handleChange = (e) => {
    this.setState({
      seachInput: e.target.value,
      toShow: true,
    });
  };

  componentDidMount = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          meals: data.meals,
        });
      });
  };

  filteredPics = () => {
    const filteredPics = this.state.meals.filter((meal) =>
      meal.strMeal.toLowerCase().includes(this.state.seachInput.toLowerCase())
    );

    return filteredPics.map((meal) => (
      <div key={meal.idMeal}>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </div>
    ));
  };

  render() {
    return (
      <div>
        <h3>Meal Finder</h3>
        <input id="seachInput" onChange={this.handleChange} />
        <div className="pics">
          {this.state.toShow === true && this.state.seachInput !== "" ? this.filteredPics() : ""}
        </div>
      </div>
    );
  }
}
