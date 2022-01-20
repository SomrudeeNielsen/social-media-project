import React from "react";
import { Link } from "react-router-dom";


const Button = () =>{
    return (
        <nav>
            <ul>
                <li>
                    <Link className="links" to="/PhotoGallery">
                        <button>Login</button>
                    </Link> 
                        <span className="text">Or need an account</span>
                    <Link className="links" to="/NewAccount">   
                        <button>Sign up</button>
                    </Link>
                </li>                
            </ul>
        </nav>
        
    );
};

export default Button; 