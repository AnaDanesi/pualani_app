import  React  from "react";
import {Link} from "react-router-dom"
import Cart from "./Cart.js"


const NavBar = () =>{
    return (
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <div id="elHome">
                    <Link className="navbar-brand" to ="/"><h2>Home</h2></Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link" to ="/categoria/combos"><h2>Combos</h2></Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to ="/categoria/macetas"><h2>Macetas</h2></Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to ="/categoria/personalizadas"><h2>Personalizadas</h2></Link>
                        </li>  
                        
                    </ul>
                    <div id="carrito">
                    <h5><Cart/>Carrito</h5> 
                    </div>
                    </div>
                </div>
            </nav>
        )
        
    
}

export default NavBar