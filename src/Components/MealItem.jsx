import { Link } from "react-router-dom";
import { currencyFormatter } from "../util/formatting.js";
import Button from "./UI/Button.jsx";
import { useContext } from "react";
import CartContext from "./store/cartContext.jsx";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { WishlistContext } from "./store/WishlistContext.jsx";
import { motion } from "framer-motion";

export default function MealItem({ meal }) {
  const wishlistCtx = useContext(WishlistContext);
  const cartCtx = useContext(CartContext);

  const isInCart = cartCtx.items.some((item) => item.id === meal.id);
  const isInWishlist = wishlistCtx.items.some((wishItem) => wishItem.id === meal.id);

  function handleAddMealToCart() {
    cartCtx.addItem({
      id: meal.id,
      name: meal.name,
      image: meal.image,
      price: meal.price,
    });
  }

  function toggleWishlistItem() {
    if (isInWishlist) {
      wishlistCtx.removeItem(meal.id);
    } else {
      wishlistCtx.addItem({
        id: meal.id,
        name: meal.name,
        image: meal.image,
        price: meal.price,
      });
    }
  }

  return (
      <Link to={`/meal/${meal.id}`}>
      <motion.article className="meal-item-box">
      
      <div className="meal-item-img">
          <motion.img src={`/${meal.image}`} alt={meal.name} />
       </div>

        <button onClick={toggleWishlistItem} className="like-button">
          {isInWishlist ? <FaHeart color="#ffc404" /> : <FaRegHeart color="#ffc404" />}
        </button>

        <div >
          <h3 className="heading03">{meal.name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
          <p className="meal-item-description para21">{meal.description}</p>
        </div>

        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </motion.article>
       </Link>
    
  );
}
