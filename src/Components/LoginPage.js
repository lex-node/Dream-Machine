import {withFormik, Form, Field} from "formik";
import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";

function LoginForm({isSubmitting, status}) {
    return (

        <div className="container">
            <header className="navigation">
                <div className="nav-container">
                    <h1 className="logo"><Link to="">Dream Machine</Link></h1>
                    <nav className="nav">
                        <Link to="/" className="nav-links">Home</Link>
                        <Link to="" className="nav-links">About</Link>
                        <Link to="contactpage" className="nav-links">Contact</Link>
                    </nav>
                </div>
            </header>
            <div className="main-section">
                <div className="banner">
                    <h1>Login Here</h1>
                    <Form>
                        <div className="fieldContainer">
                            <Field type="username" name="username" placeholder="Username"/>
                        </div>
                        <div className="fieldContainer">
                            <Field type="password" name="password" placeholder="Password"/>
                        </div>
                        <button disabled={isSubmitting}>Save</button>
                    </Form>
                    <br/>
                    <Link to="/">Home</Link>
                </div>
            </div>
        </div>
    );
}

const LoginPage = withFormik({
    mapPropsToValues({username, password}) {
        return {
            username: username || "",
            password: password || "",
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required("Name is required"),
        password: Yup.string()
            .required("Password is required"),
    }),
    handleSubmit(values, {resetForm, setStatus, setSubmitting}) {

        axios
            .post("https://sleeptrack.herokuapp.com/api/login", values)
            .then(res => {
                console.log(res.data.token); // Data was created successfully and logs to console
                setStatus(res.data);
                resetForm();
                setSubmitting(false);
            })
            .catch(err => {
                console.log(err); // There was an error creating the data and logs to console
                setSubmitting(false);
            });

    }
})(LoginForm);

export default LoginPage;

