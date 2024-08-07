<<<<<<< HEAD
import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // Check if food_list is empty or undefined
  if (!food_list || food_list.length === 0) {
    return (
      <div className="food-display" id="food-display">
        No food items available.
      </div>
    );
  }

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={item._id} // Use unique identifier
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
=======

import React, { useContext } from 'react'
import './FoodDisplay.css'

import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'



const FoodDisplay = ({ category }) => {
  
  
 
  const { food_list } = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you {food_list}</h2>
        <div className='food-display-list'>
       
            {food_list.map((item,index) =>{
                if(category==="All" || category===item.category){
                    return <FoodItem key={index} id={item._id} name={item.name} description= {item.description} price={item.price} image={item.image} />
        }
       
            })}
        </div>
    </div>
  )
}

export default FoodDisplay
>>>>>>> 89eb54fea312c348b5e26080165db9e67e099ad9
