import React, {Component} from "react";
import {Link} from "react-router-dom";

// import ROUTES

// const SignUpPage = () => (
//     <div>
//         <h1>
//             Sign Up With Edessia
//         </h1>
//         <SignUpForm/>
//     </div>
// );

const INITIAL_STATE = {
    username: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
    error: null, 
};

class SignUpForm extends Component {
    
    constructor(props) { //getting props from the 'extends Component' class?
        super (props);
    }

    onSubmit = event => {

    };

    onChange = event =>{
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid = 
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <form onSubmit={this.onSubmit}>
            <input
                name="username"
                value={username}
                onChange={this.onChange}
                type="text"
                placeholder="Full Name"
            />
            <input
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
            />
            <input
                name="passwordOne"
                value={passwordOne}
                onChange={this.onChange}
                type="text"
                placeholder="Password"
            />
            <input
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.onChange}
                type="text"
                placeholder="Confirm Password"
            />
            <button disabled={isInvalid} type="submit">Sign Up</button>
            
            {/* {error && <p>{error.message}</p>} */}
            </form>
        );
    }
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link>Sign Up</Link>
        {/* Link is missing 'to={ROUTETO.SIGNUP} */}
    </p>
)

// export default SignUpPage;

export {SignUpForm, SignUpLink}