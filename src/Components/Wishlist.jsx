import { useContext } from "react";
import UserProgressContext from "./store/UserProgressContext";
import { WishlistContext } from "./store/WishlistContext";

import Modal from "./UI/Modal";
import Button from "./UI/Button";
import WishlistItem from "./WishlistItem";

export default function Wishlist(){
const wishlistCtx= useContext(WishlistContext);
const userProgressCtx = useContext(UserProgressContext);


function handleCloseWishlist(){
    userProgressCtx.hideWishlist()
}

    return(
        <Modal className="wishlist" open={userProgressCtx.progress==="wishlist"}>
            <h2>Wishlist</h2>
            <ul>
                {wishlistCtx.items.map((item)=>(
                     <WishlistItem key={item.id}
                     id={item.id}
                     name={item.name}
                     quantity={item.quantity}
                     price={item.price}
                     image={item.image}
                     onIncrease={()=> cartctx.addItem(item)}
                    onDecrease={()=> cartctx.removeItem(item.id)}
                    />
                ))}
            </ul>
             <Button textOnly onClick={handleCloseWishlist} >Close</Button>
        </Modal>
    )
}