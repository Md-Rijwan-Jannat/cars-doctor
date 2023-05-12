import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Features from "../Features/Features";
import Products from "../Products/Products";
import Service from "../Service/Services";
import Teams from "../Teams/Teams";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Contact></Contact>
            <Products></Products>
            <Teams></Teams>
            <Features></Features>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;