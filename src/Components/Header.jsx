import { useContext, useEffect, useState } from "react";
import logoImg from "../assets/logo.jpg";
import CartContext from "./store/cartContext";
import UserProgressContext from "./store/UserProgressContext";
import { WishlistContext } from "./store/WishlistContext";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cartCtx = useContext(CartContext);
  const wishlistCtx = useContext(WishlistContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items?.reduce((total, item) => total + item.quantity, 0) || 0;
  const totalWishlistItems = wishlistCtx.items.length;

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  function handleShowWishlist(){
    userProgressCtx.showWishlist();
  }

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="header">
        <header id="main-header">
          <div id="title">
            <img src={logoImg} alt="A Restaurant" />
            <h2 className="footer-logo">Food<span style={{ color: "#ffc404" }}>King</span></h2>
          </div>
          <nav>
            <motion.button whileHover={{scale:1.05}} transition={{type:"spring", stiffness:200}} className="header-cart-btn"   onClick={handleShowCart}>
              Cart ({totalCartItems})
              <FaShoppingCart style={{marginLeft:"5px"}}/>
            </motion.button>
            <motion.button whileHover={{scale:1.05}} transition={{type:"spring", stiffness:200}} className="header-wishlist-btn" onClick={handleShowWishlist}>
              Wishlist ({totalWishlistItems})
               <FaHeart style={{ marginLeft: "5px"}} />
            </motion.button>
          </nav>
        </header>
      </div>
    </div>
  );
}
