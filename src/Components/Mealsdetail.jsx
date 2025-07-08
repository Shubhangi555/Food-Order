import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import CartContext from "./store/cartContext";
import { FaBackspace, FaBackward } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Mealsdetail({ meal }) {
    const cartCtx = useContext(CartContext);

    function handleAddMealToCart(){
        cartCtx.addItem(meal)
    }

    return <div className="meal-detail">
        <div className="container">
       <Link to="/"><FaBackward style={{color:"#000"}}/></Link> 
        <article>
            <img src={`${meal.image}`} alt={meal.name} />
            <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                <p className="meal-item-description">{meal.description}</p>
                <div className="meal-item-actions">
                    <ul className="meal-item-ingredients">
                        <h4>Ingredients</h4>
                        {meal.ingredients.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    {meal.nutrition && (
                        <div className="meal-item-nutrition">
                            <h4>Nutrition Facts:</h4>
                            <ul>
                                <li><strong>Calories:</strong> {meal.nutrition.calories}</li>
                                <li><strong>Protein:</strong> {meal.nutrition.protein}</li>
                                <li><strong>Fat:</strong> {meal.nutrition.fat}</li>
                                <li><strong>Carbs:</strong> {meal.nutrition.carbs}</li>
                            </ul>
                        </div>
                    )}
                </div>

                <p className="meal-item-actions">
                    <Button onClick={handleAddMealToCart}>Add to Cart</Button>
                </p>
            </div>
        </article>
    </div>
   
    </div>
   
}