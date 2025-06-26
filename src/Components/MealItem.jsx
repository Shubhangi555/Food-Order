import { Link } from "react-router-dom";
import {currencyFormatter} from "../util/formatting.js";
import Button from "./UI/Button.jsx";
import { useContext, useState } from "react";
import CartContext from "./store/cartContext.jsx";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";

export default function MealItem({meal}){
const [liked, setLiked] = useState(false);

const toggleLike=()=>{
    setLiked((prev)=> !prev)
}

 const cartCtx= useContext(CartContext);
 const isInCart = cartCtx.items.some(item=>item.id === meal.id);

 function handleAddMealToCart(){
    cartCtx.addItem(meal)
 }


    return  <li className="meal-item">
        <article>
            <Link to={`/meal/${meal.id}`}>
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name}/> </Link>

            <button onClick={toggleLike} className="like-button">
                {liked ? <FaHeart color="#ffc404"/> : <FaRegHeart color="#ffc404"/>}
            </button>

            <button onClick={handleAddMealToCart} className={`cart-icon ${isInCart ? "active" : " "}`}><FaShoppingCart/></button>
            
            <div>
                <h3 className="heading03">{meal.name}</h3>
                <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                <p className="meal-item-description para21">{meal.description}</p>
            </div>
            {/* <p className="meal-item-actions">
                <Button onClick={handleAddMealToCart}>Add to Cart</Button>
            </p>   */}
            
        </article>
    </li>
   
}