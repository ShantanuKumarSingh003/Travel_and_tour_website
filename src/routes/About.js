import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AboutImg from "../assets/night.jpg"
import AboutUs from "../Components/AboutUs";

function About (){
    return(
        <>
        <Navbar />
        <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
       
        
        
        btnClass="hide"
        />
        <AboutUs/>
        <Footer/>
        </>
    );
    
}

export default About;