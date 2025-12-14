function Hero() {
    return ( 
        <>
        <section className="container-fluid" id="supportHero">
            <div className="row p-5  mb-5" id="supportWrapper">
                <div className="col-10"><h5>Support Portal</h5></div>
                <div className="col-2"><a href="">Track Tickets</a></div>
                <div className="col-6 mt-5 mx">
                    <p>Search for an answer or browser help topic to create a help</p>
                    <input placeholder="Eg:how do i activate F&O,why is my order getting rejected" style={{width:"430px",height:"60px",borderRadius:"7px", border:"none"}}/>
                    <a href="" className="supportHero">Track account opening</a>
                    <a href="" className="supportHero">Track segment activation</a>
                </div>
                <div className="col-4 mt-5">

                <p>Feature</p>
                 <ol >
                        <li>Current takeover and delisting</li>
                        <li>latest Intraday leverages</li>
                    </ol>
                </div>
            </div>
        </section>
        </>
     );
}

export default Hero;