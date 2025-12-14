function Price() {
    return ( 
        <>
        <div className="container p-4">
            <div className="row p-4">
                <div className="col-4 p-4">
                    <h2 className="mb-4 fs-3">Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration:"none"}}>See pricing<i class="fa-solid fa-arrow-right" ></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row">
                        <div className="col border text-center p-3">
                            <h1>₹0</h1>
                            <p>Free equity deliver and direct mutual funds</p>
                        </div>
                        <div className="col border text-center p-3">
                            <h1>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default Price;