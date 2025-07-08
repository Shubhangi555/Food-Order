import { useContext, useState } from "react";
import TabButton from "./UI/TabButton";
import Tabs from "./UI/Tabs";
import { HotItems } from "../util/data";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import CartContext from "./store/cartContext";
import Button from "./UI/Button";
import { WishlistContext } from "./store/WishlistContext";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function HotItem() {
  const cartCtx = useContext(CartContext);
  const wishlistCtx = useContext(WishlistContext);
  const [selectedItem, setSelectedItem] = useState("salad");

  return (
    <section className="hotitem-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false }}
          className="heading02"
        >
          Hot Delicious Items
        </motion.h2>

        <Tabs
          buttons={
            <>
              {[
                "salad",
                "rolls",
                "deserts",
                "sandwich",
                "cake",
                "pureveg",
                "pasta",
                "noodles",
              ].map((category) => (
                <TabButton
                  key={category}
                  isSelected={selectedItem === category}
                  onClick={() => setSelectedItem(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </TabButton>
              ))}
            </>
          }
        >
          <motion.div
            className="hotitem-grid"
            key={selectedItem} // This helps animate when tab changes
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {HotItems[selectedItem].map((item) => {
              const isInCart = cartCtx.items.some(
                (cartItem) => cartItem.id === item.id
              );
              const isInWishlist = wishlistCtx.items.some(
                (wishItem) => wishItem.id === item.id
              );

              function handleAddMealToCart() {
                cartCtx.addItem({
                  id: item.id,
                  name: item.title,
                  price: item.price,
                  image: item.img,
                });
              }

              function toggleWishlistItem() {
                if (isInWishlist) {
                  wishlistCtx.removeItem(item.id);
                } else {
                  wishlistCtx.addItem({
                    id: item.id,
                    name: item.title,
                    image: item.img,
                    price: item.price,
                  });
                }
              }

              return (
                <Link to={`/meal/${item.id}`}>
                <motion.div
                  key={item.id}
                  className="hotitem-box"
                  variants={itemVariants}
                >
                  
                    <motion.img className="hot-item-img"                     
                      src={item.img}
                      alt={item.title}
                    />
                 

                  <button onClick={toggleWishlistItem} className="like-button">
                    {isInWishlist ? (
                      <FaHeart color="#ffc404" />
                    ) : (
                      <FaRegHeart color="#ffc404" />
                    )}
                  </button>

                  <h3 className="heading03">{item.title}</h3>
                  <p className="para28">{item.description}</p>

                  <p className="meal-item-actions">
                    <Button onClick={handleAddMealToCart}>Add to Cart</Button>
                  </p>
                </motion.div>
                 </Link>
              );
            })}
          </motion.div>
        </Tabs>
      </div>
    </section>
  );
}
