import Destination from "../Components/Destination";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Trip from "../Components/Trip";


function Home (){
    return(
        <>
        <Navbar />
        <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1494783367193-149034c05e8f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
             
        </>

    )
}

export default Home;