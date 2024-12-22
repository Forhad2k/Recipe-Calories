import PropTypes from "prop-types"
import { useState } from 'react';

const FoodAdd = ({FoodCart, removeFoodCart}) => {
  const {recipe_name, preparing_time, calories, recipes_id} = FoodCart;
  const [currentCart, setcurrentCart] = useState([]);
  const HandlecurrentCart =  food => {
    const newcurrentCart = [...currentCart, food];
    setcurrentCart(newcurrentCart);

  }
    
 
  return (
    <div className=" md:w-1/3 border border-inherit rounded-xl">
       <div>
      <h2 className="text-center text-xl font-semibold p-4">Want to cook: {FoodCart.length}</h2>
      <table className="w-full" border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody >
          {FoodCart.map((row, idx) => (
            <tr key={idx} className="bg-gray-50 w-full">
              <td>1</td>
              <td>{row.recipe_name}</td>
              <td>{row.preparing_time}</td>
              <td>{row.calories}</td>
             <td><button className="bg-green-400 hover:bg-green-600 px-5 p-2 rounded-3xl font-semibold mx-2 my-3" 
              onClick={() =>{HandlecurrentCart(row);
                removeFoodCart(row);
              } }
              >preparing</button></td> 
            </tr>
          ))}
        </tbody>
        

      </table>
      
    </div>
    <div>
      <h2 className="text-center text-xl font-semibold p-4">Currently cooking: {currentCart.length}</h2>
      <table className="w-full" border="1" cellPadding="10" cellSpacing="0">
        <thead key="thead">
          <tr>
            <th></th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody >
          {currentCart.map((row,idx) => (
            <tr key={idx} className="bg-gray-50 w-full">
              <td>1</td>
              <td>{row.recipe_name}</td>
              <td>{row.preparing_time}</td>
              <td>{row.calories}</td>
            </tr>
          ))}
        </tbody>
        

      </table>
      
    </div>
   
    </div>
  )
}
FoodAdd.propTypes = {
  HandleFoodCart: PropTypes.func,
  removeFoodCart: PropTypes.func,
  FoodCart: PropTypes.array.isRequired
};

export default FoodAdd
