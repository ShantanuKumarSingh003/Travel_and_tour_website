import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"
import AboutImg from "../assets/10.jpg"
import Trip from "../Components/Trip";

function Service (){
    return(
        <>
        <Navbar />
        <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
        />
        <Trip/>
        <Footer/>
        </>

    )
}

export default Service;