import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";



const NewAccount = ({handleSubmit, email, setEmail, password, setPassword}) => {
    return (
        <Container className="newbie">
              
            <form onSubmit={handleSubmit} className="mt-3">
                
                <div className="form-group mb-3">
                <label className="form-label">First name:</label>
                <input
                type="email"
                className="form-control"
                placeholder="Enter first name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                </div>

                <div className="form-group mb-3">
                <label className="form-label">Last name:</label>
                <input
                type="password"
                className="form-control"
                placeholder="Enter lastname"
                value={email}
                onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                
                <div className="form-group mb-3">
                <label className="form-label">Email address:</label>
                <input
                type="password"
                className="form-control"
                placeholder="Enter email-address"
                value={email}
                onChange={(e) => setPassword(e.target.value)}
                />
                </div>

                <div className="form-group mb-3">
                <label className="form-label">User name:</label>
                <input
                type="password"
                className="form-control"
                placeholder="Enter user name"
                value={email}
                onChange={(e) => setPassword(e.target.value)}
                />
                </div>

                <div className="form-group mb-3">
                <label className="form-label">password</label>
                <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={email}
                onChange={(e) => setPassword(e.target.value)}
                />
                </div>

                <div className="form-group mb-3">
                <label className="form-label">Confirm password</label>
                <input
                type="password"
                className="form-control"
                placeholder="Confirm password"
                value={email}
                onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <nav>
            <ul>
                <li>
                    <Link className="links" to="/">
                        <button>Submit</button>
                    </Link>      
                </li>                
            </ul>
        </nav>

                </form>

                 
       </Container>
    );
}

export default NewAccount;