import {withFormik, Form, Field} from "formik";
import React from "react";
import axios from "axios";
import * as Yup from "yup";
import Header from "./Header";


const LoginForm = ({values, errors, touched, isSubmitting}) => {
    return (
        <div className="container">
            <Header/>
            <div className="main-section">
                <div className="banner">
                    <div className="blackcloud">
                        <h1>Login Here</h1>
                    </div>
                    <Form>
                        <div className="fieldContainer">
                            {touched.username && errors.username && <p>{errors.username}</p>}
                            <Field type="username" name="username" placeholder="Username"/>
                        </div>
                        <div className="fieldContainer">
                            {touched.password && errors.password && <p>{errors.password}</p>}
                            <Field type="password" name="password" placeholder="Password"/>
                        </div>
                        <div className="buttonContainer">
                            <button disabled={isSubmitting} type="Submit">Save</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

const LoginPage = withFormik({

    mapPropsToValues({username, password}) {
        return {
            username: username || "",
            password: password || ""
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

