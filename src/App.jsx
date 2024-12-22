import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navber from './component/Navber';
import FoodAdd from './component/FoodAdd';
import Foods from './component/Foods';
import { useState } from 'react';
import PropTypes from "prop-types"
import Hero from './component/Hero';
function App() {
  const [FoodCart, setFoodCart] = useState([]);
   const HandleFoodCart =  food => {
    const exists = FoodCart.some(item => item.recipe_id === food.recipe_id);

    if (!exists) {
      const newFoodCart = [...FoodCart, food];
      setFoodCart(newFoodCart);
      toast.success("This item is  Added!");
    } else {
      toast.error("This item is already in the FoodCart!");
      // toast("Wow so easy!");
    }
   }
   const removeFoodCart = food => {
    const newFoodCart = FoodCart.filter(item => item.recipe_id !== food.recipe_id);
        setFoodCart(newFoodCart);
    
   }
   
  return (
    <>
    <Navber />
    <Hero />
    <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"

/>
    <div className="recepis-title text-center mt-20 m-7 ">
        <h1 className='text-[2rem] pb-6 font-bold'>
          Our Recepics
        </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae commodi aperiam odio? Debitis, veniam dolore! Illo illum quo quas qui corrupti ad odio nam quibusdam officia possimus, unde accusantium optio!</p>
    </div>
    
    <div className='flex  justify-between'>
    <Foods HandleFoodCart={HandleFoodCart}></Foods>
    <FoodAdd FoodCart={FoodCart} removeFoodCart={removeFoodCart}></FoodAdd>
    </div>
    
     </>
  )
}
App.propTypes = {
  HandleFoodCart: PropTypes.func,
};

export default App
