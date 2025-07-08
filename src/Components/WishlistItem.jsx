import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import CartContext from "./store/cartContext";
import { WishlistContext } from "./store/WishlistContext";

export default function WishlistItem({id, name, price, image}){
 const wishlistCtx= useContext(WishlistContext)
 const cartCtx = useContext(CartContext);

   
      function handleAddMealToCart(){
            cartCtx.addItem({
                id,
                name,
                price,
                image,
            })
            wishlistCtx.removeItem(id);
        }

    return(
        <li className="cart-item">
   
        {/* <div>
          <img src={image} alt={name} />
        </div> */}

        <p>
            {name}- {currencyFormatter.format(price)}
        </p>
        
       <p>
        <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p> 
    </li>)
}