import { Link } from "react-router-dom";
import Button from "./UI/Button";
import deliveryman from "../assets/delivery-man-1.png"

export default function DeliveryChallenge(){
    return(
        <section className="delivery-challenge-section">
            <div className="container">
                <div className="main-cta">
                    <div className="cta-title">
                        <p className="para23">crispy, every bite taste</p>
                        <h2 className="heading01">30 minutes fast <br/> delivery challenge</h2>
                    </div>
                    <Link><Button>Order Now</Button> </Link>
                    <div className="delivery-man">
                        <img src={deliveryman}/>
                    </div>
                </div>
            </div>
        </section>
    )
}