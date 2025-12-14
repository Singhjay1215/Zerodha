                            
function RightImg({title,body,footer,ImgUrl}) {
    return ( 
        <>
        <div className="container mt-5">
            <div className="row">
                <div className=" col-6 mt-6 p-5">
                <h1>{title}</h1>
                <p>{body}</p>
                <a href={footer}>Learn more →</a>
                </div>

               
                <div className="col-6 mt-2">
                <img src={ImgUrl} width="400px"/>
                </div>
            </div>

        </div>
        </>
     );
}

export default RightImg;