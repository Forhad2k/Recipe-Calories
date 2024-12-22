
import './Hero.css'; // Import the CSS file

const Hero = () => {
    return (
        <div className="hero">
            <div className="background-image">
                <div className="content w-6/10">
                    <h1 className='hero-text md:text-[70px]'>Discover an exceptional cooking class tailored for you!</h1>
                    <p>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                    <div className="buttons">
                        <button className="explore-btn border-2 bg-green-600 hover:bg-green-400  px-5 p-3 text-black rounded-3xl font-semibold mx-2 my-3">Explore Now</button>
                        <button className="feedback-btn rounded-3xl mx-2 my-3 px-5 p-3 hover:bg-slate-200 hover:text-black">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

