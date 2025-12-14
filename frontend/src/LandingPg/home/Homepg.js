import OpenAccount from "../../OpenAccount";
import Education from "./Education";
import Hero from "./Hero";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import Award from "./Award";
import Stats from "./Stats";
import Price from "./Price"
function Homepg() {
    return ( 
        <>
        
        <Hero/>
        <Award/>
        <Stats/>
        <Price/> 
        <Education/> 
        <OpenAccount/> 
        
        </>
     );
}

export default Homepg;