import React from "react";
import { useStateValue } from "../context/StateProvider";
import "../css/Product.css";

const Product = ({ id, title, image, price, rating }) => {
   const [, dispatch] = useStateValue();

   const addToBasket = () => {
      dispatch({
         type: "ADD_TO_BASKET",
         item: {
            id, //same as id:id,title:title, image:image and so on.
            title,
            image,
            price,
            rating,
         },
      });
   };

   // const ratingArray = new Array(rating);
   return (
      <div className="product">
         <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
               <small>₹</small>
               <strong>{price}</strong>
            </p>
            <div className="product__rating">
               {Array(rating) //created an array of rating size
                  .fill() // filled it empty(not given in any value to fill)
                  .map(() => {
                     // mapped it with nothing
                     return <p>⭐️</p>; //just tried to loop rating(like 5) times.
                  })}
            </div>
         </div>
         <img src={image} alt="" />
         <button onClick={addToBasket}>Add to basket</button>
      </div>
   );
};

export default Product;
