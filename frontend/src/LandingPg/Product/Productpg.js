import Hero from "./Hero";
import LeftImg from "./LeftImg";
import RightImg from "./RightImg";
import Universe from "./Universe";
function Productpg() {
    return ( 
        <>
       <Hero/>
       <LeftImg 
       ImgUrl="media/kite.png" 
       prdtName="Kite"
       prdtDes="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
       tryDemo="" 
       learnMore="" 
       gogglePlay="" 
       appStore=""/>
       
       <RightImg
       title="Console"
       body="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
       footer=""
       ImgUrl="media/console.png"
        />

       <LeftImg 
       ImgUrl="media/coin.png" 
       prdtName="Coin"
       prdtDes="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
       tryDemo="" 
       learnMore="" 
       gogglePlay="" 
       appStore=""/>

       <RightImg
       title="Kite Connect API"
       body="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.."
       footer=""
       ImgUrl="media/kiteconnect.png"
        />
       
       <LeftImg 
       ImgUrl="media/varsity.png" 
       prdtName="Varsity mobile"
       prdtDes="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
       tryDemo="" 
       learnMore="" 
       gogglePlay="" 
       appStore=""/>

        <p className="text-center">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>

        <Universe/>
        </>
     );
}

export default Productpg;