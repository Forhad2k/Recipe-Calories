import PropTypes from 'prop-types'; // ES6
import '../app.css'
const Food = ({food, HandleFoodCart}) => {
  const {recipe_image , recipe_name, short_description, ingredients, preparing_time, calories } = food ;
  return (
    <div>
      <div className="m-6 w-96 h-[685px]">
      <img src={recipe_image} alt={recipe_name} className='w-full' />
      <h1 className='md:text-2xl font-semibold mt-6 '>{recipe_name}</h1>
      <p className='fira-sans-regular mt-4 mb-4 text-gray-400 leading-7'>{short_description}</p>
      <hr />
      <h2 className='mt-6 mb-4'>Ingredients:{ingredients.length} </h2>
       {
        ingredients.map((item, idx) => <li key={idx} className=" list-disc text-gray-400 fira-sans-regular"> {item} </li>)
       }
      <div className="footer flex text-gray-500 mt-4">
        <div className="fl flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

        <p className='mx-1'>{preparing_time}</p>
        </div>
        <div className="fr flex mx-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
</svg>

        <p className='mx-1'>{calories}</p>
        </div>
        
      </div>
      <button 
      onClick={() =>HandleFoodCart(food)}
      className='bg-green-400 hover:bg-green-600 px-5 p-2 rounded-3xl font-semibold  my-3' >Want to cook</button>
      </div>
    </div>
  )
}
 
Food.propTypes = {
  food: PropTypes.object.isRequired,
  HandleFoodCart:PropTypes.func
  
}

export default Food
