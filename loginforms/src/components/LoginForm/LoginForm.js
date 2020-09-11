import React, { useState } from 'react';
import './LoginForm.css';
import {Redirect} from 'react-router'
import { withRouter } from "react-router-dom";

function LoginForm(props) {
    const [state, setState] = useState({
        name: "",
        password: "",
        redirect:false
    })
    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault(); //to prevent any default page loading
        const payload = {
            "name": state.name,
            "password": state.password,
        }
        console.log(payload)

        let logininfo = localStorage.getItem('document');
        let parse = JSON.parse(logininfo);
        if (state.name === parse.name) {
            alert("successfull login")
            setState({redirect:true})
        } else {
            alert("invalid credentials")
        }
    }

    // const redirectToRegister = () => {
    //     props.updateTitle('Register')
    //     props.history.push('/register');
    // }
    const {redirect} = state;
    if (redirect){
        return <Redirect to='/dashboard' />
    }
    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        <h2>Login </h2>
            <form>
            <div className="form-group text-left">
                    <label htmlFor="exampleInputname">Name</label>
                    <input type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="nameHelp"
                        placeholder="Enter name"
                        value={state.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-check">
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >Submit</button>
            </form>
            <div className="alert alert-success mt-2" style={{ display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            <div className="registerMessage">
                <span>Dont have an account? </span>
                {/* <span className="loginText" onClick={() => redirectToRegister()}>Register</span> */}
            </div>
        </div>
    )
}

export default withRouter(LoginForm);