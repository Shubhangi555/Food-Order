import { currencyFormatter } from "../util/formatting";

export default function CartItem({name, quantity, price, onIncrease, onDecrease, image}){
    return(<li className="cart-item">
   
        {/* <div>
          <img src={image} alt={name} />
        </div> */}

        <p>
            {name}- {quantity} * {currencyFormatter.format(price)}
        </p>
        
       <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
        </p> 
    </li>)
}