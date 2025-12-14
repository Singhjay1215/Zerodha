function Universe() {
    return (  
        <>
        <div className="container">
            <div className="row text-center">
               <h1>The Zerodha Universe</h1> 
               <p>Extend your trading and investment experience even further with our partner platforms</p>

               <div className="col-4 p-3 mt-5">
                <img src="media/smallcaseLogo.png" width="150px"/>
                <p className="fs-6 text-muted">Our asset management venture
                that is creating simple and transparent index
                funds to help you save for your goals.</p>
               </div>

               <div className="col-4 p-3 mt-5">
                <img src="media/sensibullLogo.svg" width="150px"/>
                <p className="fs-6 text-muted">Options trading platform that lets you
                create strategies, analyze positions, and examine
                data points like open interest, FII/DII, and more.
                </p>
               </div>

               <div className="col-4 p-3 mt-5">
                <img src="media/smallcaseLogo.png" width="150px"/>
                <p className="fs-6 text-muted ">Investment research platform
                that offers detailed insights on stocks,
                sectors, supply chains, and more.
                </p>
               </div>
               <div className="col-4 p-3 mt-5">
                <img src="media/smallcaseLogo.png" width="150px"/>
                <p className="fs-6 text-muted">Our asset management venture
                that is creating simple and transparent index
                funds to help you save for your goals.</p>
               </div>

               <div className="col-4 p-3 mt-5">
                <img src="media/smallcaseLogo.png" width="150px"/>
                <p className="fs-6 text-muted">Thematic investing platform
                that helps you invest in diversified
                baskets of stocks on ETFs.
                </p>
               </div>

               <div className="col-4 p-3 mt-5">
                <img src="media/smallcaseLogo.png" width="150px"/>
                <p className="fs-6 text-muted">Personalized advice on life
                and health insurance. No spam
                and no mis-selling.
                Sign up for free
                </p>
               </div>
                <button  className="btn btn-primary p-2 fs-5 mt-3 mb-5" style={{width:"30%",margin:"auto"}}>SignUp Now</button>
            </div>

        </div>
        </>
      );
}

export default Universe;