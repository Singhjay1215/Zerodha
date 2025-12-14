
import {Link} from "react-router-dom";
function Navbar() {
    return (
        <>
            <div className="container-fliud">
                <nav className="navbar navbar-expand-lg bg-light border-bottom bg-body-tertiary">
                    <div class="container-fluid ">
                        <Link className="navbar-brand ms-5" to="/"><img src ="media/logo.svg" width="25%"/></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <form>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                 <li class="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link active" to="/product">Product</Link>
                                </li>
                               <li class="nav-item">
                                    <Link className="nav-link active" to="/price">Pricing</Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link active" to="/support">Support</Link>
                                </li>
                            </ul>
                           </form>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;