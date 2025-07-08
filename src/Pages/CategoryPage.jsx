// src/Pages/CategoryPage.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MealItem from "../Components/MealItem";

export default function CategoryPage() {
  const { catId } = useParams(); // example: 'cat1', 'cat2', etc.
  const [categoryMeals, setCategoryMeals] = useState([]);

  useEffect(() => {
    async function fetchCategoryMeals() {
      const response = await fetch("http://localhost:3000/meals");
      const meals = await response.json();

      // Assume each meal has a category ID, like meal.category === 'cat1'
      const filtered = meals.filter((meal) => meal.category === catId);
      setCategoryMeals(filtered);
    }

    fetchCategoryMeals();
  }, [catId]);

  return (
    <>
    <div className="container">
     <h2 className="heading02">Delicious {catId.replace("cat", "")} Options Await!!!</h2>
</div>
      {categoryMeals.length === 0 ? (
        <p>No meals found in this category.</p>
      ) : (
        
        <ul id="meals">
         
          {categoryMeals.map((meal) => (
             <li className="meal-item">
            <MealItem key={meal.id} meal={meal} />
             </li>
          ))}
         
        </ul>
      )}
    </>
  );
}
