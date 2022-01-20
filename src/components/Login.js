import React from "react";
import Container from "react-bootstrap/Container";
import Button from "./Button";



const Login = ({handleSubmit, email, setEmail, password, setPassword}) => {
    return (
        <Container className="p-3">
            <>
                <img className="image" src="./images/beach.jpg" alt=""></img>
            </>   
            <form onSubmit={handleSubmit} className="mt-3">
                
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
                <label className="form-label">password</label>
                <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={email}
                onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <div>
                   <Button /> 
                </div>

                </form>

                 
       </Container>
    );
}

export default Login;