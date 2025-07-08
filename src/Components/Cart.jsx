import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "./store/cartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "./store/UserProgressContext";
import CartItem from "./CartItem";
import { AnimatePresence } from "framer-motion";

export default function Cart(){
const cartctx= useContext(CartContext);
const userProgressCtx = useContext(UserProgressContext)

const cartTotal = cartctx.items.reduce((totalPrice, item)=>totalPrice + item.quantity * item.price ,0)

function handleCloseCart(){
    userProgressCtx.hideCart();
}

function handleGoToCheckout(){
    userProgressCtx.showCheckout()
}
    return <AnimatePresence>
    <Modal className="cart" open={userProgressCtx.progress==="cart"}>
        <h2>Your Cart</h2>
        <ul>
            {cartctx.items.map((item, id)=>(
                <CartItem key={id}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                image={item.image}
                onIncrease={()=> cartctx.addItem(item)}
                onDecrease={()=> cartctx.removeItem(item.id)}
                />
            ))}
        </ul>
        <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        <p className="modal-actions">
            <Button textOnly onClick={handleCloseCart} >Close</Button>
           {cartctx.items.length > 0 && <Button onClick={handleGoToCheckout}>Go to Checkout</Button>} 
        </p>
    </Modal>
    </AnimatePresence>
}