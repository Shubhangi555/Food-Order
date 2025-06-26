import { useContext, useEffect, useState } from "react"
import logoImg from "../assets/logo.jpg"
import Button from "./UI/Button"
import CartContext from "./store/cartContext"
import UserProgressContext from "./store/UserProgressContext";

export default function Header(){
const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

const cartCtx=  useContext(CartContext);
const userProgressCtx= useContext(UserProgressContext)

const totalCartItems= cartCtx.items.reduce((totalNumberOfItems, item)=>{
    return totalNumberOfItems + item.quantity
},0)

function handleShowCart(){
    userProgressCtx.showCart();
}

    return  <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
    <div className="header">
      <header id="main-header">
        <div id="title">
          <img src={logoImg} alt="A Restaurant" />
          <h1>SFoods</h1>
        </div>
        <nav>
          <Button textOnly onClick={handleShowCart}>
            Cart ({totalCartItems})
          </Button>
        </nav>
      </header>
    </div>
  </div>
}                                        