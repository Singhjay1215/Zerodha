function Brokage() {
    return ( 
        <>
        <div className="container">
            <div className="row p-5 mt-5 text-center border-top">
                <div className="col-8 p-4">
                    <a href="" style={{textDecoration:"none"}}>
                <h3 className="fs-5">Brokage calculator</h3>
                </a>
                <ul className="text-muted " style={{textAlign:"left", lineHeight:"2.5", fontSize:"12px"}}>
                    <li>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha </li>
                    <li>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting</li>
                    <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                    <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN</li>
                    <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                </ul>
                </div>
                <div className="col-4">
                     <a href="" style={{textDecoration:"none"}}>
                <h3 className="fs-5">List of charges</h3>
                </a>
                </div>
            </div>

        </div>
        </>
     );
}

export default Brokage;