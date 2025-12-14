function Award() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 ">
                    <img src="media/largestBroker.png.svg" alt="img" width="80%" />
                </div>

                <div className="col-6 ">
                    <h2>Largest stock broker in India</h2>
                    <p>2 million zerodha clients contribute to over 15% of all retail order volume in india daily by trading and investing in:</p>
                    <div className="row">
                        <div className="col-6 mt-2">
                            <ul>
                                <li>Futures and options</li>
                                <li>commoditiy derivatives</li>

                                <li>currency options</li>
                            </ul>

                        </div>
                        <div className="col-6 mt-2">
                            <ul>
                                <li>stocks and IPOS</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and goverment security</li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/pressLogos.png" alt="img" width="90%"/>
                </div>
            </div>
        </div>
    );
}

export default Award;