import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AboutImg from "../assets/2.jpg"
import ContactForm from "../Components/ContactForm";

function Contact (){
    return(
        <>
        <Navbar />
        <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
        />
        <ContactForm/>
        <Footer/>
        </>

    )
}

export default Contact;