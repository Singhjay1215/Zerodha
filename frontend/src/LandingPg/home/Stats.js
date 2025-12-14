function Stats() {
    return ( 
        <>
        <div className="container p-3">
        <div className="row p-5">
            <div className="col-6 mt-3  p-5">
             <h2 className="mb-5">Trust with confidence</h2>
             <h3 className="fs-5">Customer-first always</h3>
             <p className="test-muted">Thats why 1.3+crore customer trust zerodha with ₹3.5+lakh crores worth of equity invesments</p>
             <h3 className="fs-5">No spam or gimmicks</h3>
             <p className="text-muted ">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
             <h3 className="fs-5">The Zerodha universe</h3>
             <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
            </div>
            <div className="col-6 mt-3">
                <img src="media/ecosystem.png" width="100%"/>
                <div className="text-center">
                    <a href="" className="mx-5" style={{textDecoration:"none"}}>Explore our product <i class="fa-solid fa-arrow-right"></i></a>
                    <a href="" style={{textDecoration:"none"}}>Try kite demo<i class="fa-solid fa-arrow-right" ></i></a>
                </div>
            </div>
        </div>
        </div>
        </>
     );
}

export default Stats;