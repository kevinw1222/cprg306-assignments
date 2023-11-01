"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(
        "https://themealdb.com/api/json/v1/1/filter.php?i=${ingredient}"
      );
      const data = await response.json();

      if (data.meals) {
        return data.meals.map((meal) => ({
          id: meal.idMeal,
          name: meal.strMeal,
          image: meal.strMealThumb,
        }));
      } else {
        return [];
      }
    } catch (error) {
      console.error("Error fetching meal ideas: ", error);
      return [];
    }
  };

  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  useEffect(() => {
    fetchMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas with {ingredient}</h2>
      <ul>
        {meals.map((meal) => (
          <li ky={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}
