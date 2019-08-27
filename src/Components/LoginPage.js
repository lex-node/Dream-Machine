import {withFormik, Form, Field} from "formik";
import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";


const LoginForm = props => {
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
                            {props.touched.username && props.errors.username && <p>{props.errors.username}</p>}
                            <Field type="username" name="username" placeholder="Username"/>
                        </div>
                        <div className="fieldContainer">
                            {props.touched.password && props.errors.password && <p>{props.errors.password}</p>}
                            <Field type="password" name="password" placeholder="Password"/>
                        </div>
                        <button disabled={props.isSubmitting} type="Submit">Save</button>
                    </Form>
                    <br/>
                    <Link to="/">Home</Link>
                </div>
            </div>
        </div>
    );
}

const LoginPage = withFormik({

    mapPropsToValues(props) {
        return {
            username: props.username || "",
            password: props.password || ""
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
                console.log(res.data.token);
                console.log(res.data);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('id', res.data.id);
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

