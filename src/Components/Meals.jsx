
import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import Button from "./UI/Button.jsx";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");
      if (!response.ok) {
        console.error("Failed to fetch meals");
        return;
      }
      const meals = await response.json();
      setLoadedMeals(meals);
    }

    fetchMeals();
  }, []);

  const isAllVisible = visibleCount >= loadedMeals.length;

  const handleShowMore = () => {
    if (isAllVisible) {
      setVisibleCount(4); // Reset to first 4
    } else {
      setVisibleCount((prev) => prev + 4); // Show 4 more
    }
  };

  const visibleMeals = loadedMeals.slice(0, visibleCount);

  return (
    <>
    
    <div className="container">
        <h2 className="heading02">What's Cooking ?</h2>
    </div>
      <ul id="meals">
        {visibleMeals.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>

      {loadedMeals.length > 4 && (
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <Button onClick={handleShowMore}>
            {isAllVisible ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}
    </>
  );
}
