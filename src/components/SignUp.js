import React from "react";

import { Link, useParams } from "react-router-dom";


import Container from "react-bootstrap/Container";



const SignUp = ({handleSubmit, email, setEmail, password, setPassword}) => {
    return (
        <Container className="p-5">
            
            <form onSubmit={handleSubmit} className="mt-5">
                <h2>Sign Up</h2>
                <div className="form-group mb-3">
                <label className="form-label">User name</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter user name"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>

                <div className="form-group mb-3">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group mb-3">
                <label className="form-label">Password</label>
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
                        <Link className="links" to="/UserPage">
                        <button>Submit</button>
                    </Link> 
                        </li>
                    </ul>
                </nav>
                

                </form>

                 
       </Container>
    );
}

export default SignUp;