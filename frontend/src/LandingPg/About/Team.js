function Team() {
    return (
        <>
            <div className="container">
                <div className="row mt-2 text-center">
                    <h1>People</h1>
                </div>
                <div className="row">
                    <div className="col-6 p-5 mt-2 text-center">
                        <img src="media/nithinKamath.jpg" alt="img" style={{borderRadius:"100%",width:"70%"}}/>
                        <p>Nithin Kamath</p>
                        <p className="text-muted">Founder, CEO</p>
                    </div>
                    <div className="col-6 p-5 mt-5 text-muted">
                        <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                        </p>

                        <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                        </p>

                        <p>
                        Playing basketball is his zen.
                        </p>

                        <p>
                        Connect on Homepage / TradingQnA / Twitter
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Team;