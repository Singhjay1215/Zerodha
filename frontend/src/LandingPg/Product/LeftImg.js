function LeftImg({ ImgUrl, prdtName, prdtDes, tryDemo, learnMore, gogglePlay, appStore }) {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-4 p-3 mb-5">
                        < img src ={ImgUrl} width="400px"/>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-6 p-3">
                        <h3>{prdtName}</h3>
                        <p>{prdtDes}</p>
                        <div>
                         <a href={tryDemo}>Try Demo →</a>
                         <a href={learnMore} style={{marginLeft:"50px"}}>Learn More →</a>
                        </div>
                        
                        <div className="mt-3">
                         <a href={gogglePlay}><img src="media/googlePlayBadge.svg"/></a>
                         <a href={appStore}><img src="media/appstoreBadge.svg"
                         style={{marginLeft:"10px"}}
                         /></a>
                        </div>
                        

                    </div>
                </div>
            </div>
        </>
    );
}

export default LeftImg;