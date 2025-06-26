import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Mealsdetail from "./Mealsdetail";


export default function Details() {
  const { mealId } = useParams();  // returns an object with key-value pairs of your route params. You can fetch dynamic data based on the ID in the URL
  const [meal, setMeal] = useState(null);

  useEffect(() => {
  async function fetchMeal() {
    try {
      const response = await fetch('http://localhost:3000/meal-details');

      if (!response.ok) {
        throw new Error("Failed to fetch meal details");
      }
      const data = await response.json();

      const foundMeal = data.find((m) => m.id === mealId);
    
      setMeal(foundMeal);
    } catch (error) {
    }
  }

  fetchMeal();
}, [mealId]);


  if (!meal) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Mealsdetail key={meal.id} meal={meal} />
    </div>
  );
}
