import { useEffect, useState } from "react";
import Food from "./Food";
import PropTypes from 'prop-types'; // ES6
// import Food from "./Food";

const Foods = ({HandleFoodCart}) => {
  const [foods, setFoods] = useState([]);
  

  useEffect(() => {
    fetch('/Food.json') // Adjust path if needed
      .then(res => res.json())
      .then(data => setFoods(data))
      .catch(error => console.error("Error fetching food data:", error));
  }, []);

  return (
   <div className="md:grid grid-cols-2 gap-4 w-2/3">
    {
      foods.map((food,idx) => <Food key={idx} food={food} HandleFoodCart={HandleFoodCart}></Food>)
    }
   </div>
  );
};
Foods.propTypes = {
  HandleFoodCart:PropTypes.func
  
}
export default Foods;


