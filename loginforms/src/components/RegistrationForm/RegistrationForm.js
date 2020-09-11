import React, { useState } from 'react';
import './RegistrationForm.css';
import {Redirect} from 'react-router'
import { withRouter } from "react-router-dom";
function RegistrationForm(props) {

    const [state, setState] = useState({
        name:'',
        email: "",
        password: "",
        confirmPassword: "",
        phone:'',
        profession:'',
        redirect:false
    })
    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    // const redirectToLogin = () => {
    //     props.updateTitle('Login')
    //     props.history.push('/login');
    // }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload = {
            "name":state.name,
            "email": state.email,
            "password": state.password,
            'phone':state.phone,
            'profession':state.profession
        }
        console.log(payload)
        if (state.password === state.confirmPassword) {
            console.log(payload)
            setState({redirect:true})
        } else {
            alert('Passwords do not match');
        }
        localStorage.setItem('document', JSON.stringify(state));
        
    }

    const {redirect} = state;
    if (redirect){
        return <Redirect to='/login' />
    }
    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
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
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={state.email}
                        onChange={handleChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
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
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        value={state.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputphone">Phone.No</label>
                    <input type="text"
                        className="form-control"
                        id="phone"
                        aria-describedby="phoneHelp"
                        placeholder="Enter phone"
                        value={state.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleSelectProfession">Profession: </label>
                    <select value={state.profession} onChange={handleChange}>
                        <option>Select</option>
                        <option value='webdivision'>Web Division</option>
                        <option value='digitalmarket'>Digital Marketting</option>
                        <option value='appdevloper'>App Developer</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >
                    Register
                </button>
            </form>
            <div className="alert alert-success mt-2" style={{ display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
        </div>
    )
}
export default withRouter(RegistrationForm);