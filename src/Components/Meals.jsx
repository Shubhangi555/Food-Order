
import { useEffect, useRef, useState } from "react";
import MealItem from "./MealItem";
import Button from "./UI/Button.jsx";
import { motion } from "framer-motion";



export default function Meals() {

  const [loadedMeals, setLoadedMeals] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);




  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("/meals.json");
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
        <motion.h2  initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false }} className="heading02">What's Cooking ?</motion.h2>
      </div>
      <motion.ul
        id="meals">
        {visibleMeals.map((meal) => (
          <motion.li key={meal.id}
            className="meal-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }} >
            <MealItem meal={meal} />
          </motion.li>
        ))}
      </motion.ul>

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
