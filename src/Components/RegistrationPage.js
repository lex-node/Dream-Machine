import {withFormik, Form, Field} from "formik";
import React from "react";
import axios from "axios";
import * as Yup from "yup";
import Header from "./Header";

const RegistrationForm = props => {

    return (
        <div className="container">
            <Header/>
            <div className="main-section">
                <div className="banner">
                    <div className="blackcloud">
                        <h1>Register Here</h1>
                    </div>
                    <Form>
                        <div className="fieldContainer">
                           {props.touched.username && props.errors.username && <p>{props.errors.username}</p>}
                            <Field type="username" name="username" placeholder="Username"/>
                        </div>
                        <div className="fieldContainer">
                            {props.touched.password && props.errors.password && <p>{props.errors.password}</p>}
                            <Field type="password" name="password" placeholder="Password"/>
                        </div>
                        <div className="fieldContainer">
                            <Field type="birthdate" name="birthdate" placeholder="Birthdate"/>
                        </div>
                    </Form>
                    <div className="buttonContainer">
                        <button id="loneButton" disabled={props.isSubmitting}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const RegistrationPage = withFormik({
    mapPropsToValues({username, password, birthdate}) {
        return {
            username: username || "",
            password: password || "",
            birthdate: birthdate || "",
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required("Name is required"),
        password: Yup.string()
            .min(4, "Password must be 4 characters or longer")
            .required("Password is required"),
        birthdate: Yup.date()
            .required("Birth date is required")
            .default(new Date()),
    }),
    handleSubmit(values, {resetForm, setStatus, setSubmitting}) {

        axios
            .post("https://sleeptrack.herokuapp.com/api/register", values)
            .then(res => {
                console.log(res.data); // Data was created successfully and logs to console
                setStatus(res.data);
                resetForm();
                setSubmitting(false);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('id', res.data.id);
            })
            .catch(err => {
                console.log(err); // There was an error creating the data and logs to console
                setSubmitting(false);
            });

    }
})(RegistrationForm);

export default RegistrationPage;


