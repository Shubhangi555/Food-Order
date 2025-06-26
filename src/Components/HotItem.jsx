// HotItem.js
import { useContext, useState } from "react";
import TabButton from "./UI/TabButton";
import Tabs from "./UI/Tabs";
import {HotItems} from "../util/data"
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import CartContext from "./store/cartContext";


export default function HotItem({meal}) {
  const [liked, setLiked] = useState(false);

const toggleLike=()=>{
    setLiked((prev)=> !prev)
}

 const cartCtx= useContext(CartContext);
 

 function handleAddMealToCart(){
    cartCtx.addItem(meal)
 }
  const [selectedItem, setSelectedItem] = useState("salad");

  return (
    
    <section className="hotitem-section">
      <div className="container">
      {/* <h4 className="para28">About Our Food</h4> */}
      <h2 className="heading02">Hot Delicious Items</h2>

      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedItem === "salad"}
              onClick={() => setSelectedItem("salad")}
            >
              Salad
            </TabButton>
            <TabButton
              isSelected={selectedItem === "rolls"}
              onClick={() => setSelectedItem("rolls")}
            >
              Rolls
            </TabButton>
            <TabButton
              isSelected={selectedItem === "deserts"}
              onClick={() => setSelectedItem("deserts")}
            >
              Deserts
            </TabButton>
             <TabButton
              isSelected={selectedItem === "sandwich"}
              onClick={() => setSelectedItem("sandwich")}
            >
              Sandwich
            </TabButton>
             <TabButton
              isSelected={selectedItem === "cake"}
              onClick={() => setSelectedItem("cake")}
            >
              Cake
            </TabButton>
             <TabButton
              isSelected={selectedItem === "pureveg"}
              onClick={() => setSelectedItem("pureveg")}
            >
              Pureveg
            </TabButton>
             <TabButton
              isSelected={selectedItem === "pasta"}
              onClick={() => setSelectedItem("pasta")}
            >
              Pasta
            </TabButton>
             <TabButton
              isSelected={selectedItem === "noodles"}
              onClick={() => setSelectedItem("noodles")}
            >
              Noodles
            </TabButton>
            
          </>
        }
      >
        
          <div className="hotitem-grid">
            {HotItems[selectedItem].map((item, index) => {
               const isInCart = cartCtx.items.some(cartItem => cartItem.id === item.id);
              return(
              
              <div className="hotitem-box" key={index}  >
                <Link to={`/meal/${item.id}`}>
                 <img src={item.img} alt={item.title} />
                 </Link>
                  <button onClick={toggleLike} className="like-button">
                    {liked ? <FaHeart color="#ffc404"/> : <FaRegHeart color="#ffc404"/>}
                  </button>
                 
                  <button onClick={handleAddMealToCart} className={`cart-icon ${isInCart ? "active" : " "}`}><FaShoppingCart/></button>
                <h3 className="heading03">{item.title}</h3>
                <p className="para28">{item.description}</p>
                
              </div>
              )
             
})}
          </div>
    
      </Tabs>
      </div>
    </section>
  );
}
