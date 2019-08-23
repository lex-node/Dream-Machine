import {withFormik, Form, Field} from "formik";
import React, {useEffect, useState} from "react";
import {Route, Link} from "react-router-dom";
import axios from "axios";


function LoginForm({isSubmitting, status}) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (status) {
            setUsers([...users, status]);
        }
    }, [status]);

    return (
        <div>
            <h1>Login Here</h1>
            <Form>
                <div>
                    <Field type="email" name="email" placeholder="Email"/>
                </div>
                <div>
                    <Field type="password" name="password" placeholder="Password"/>
                </div>
                <button disabled={isSubmitting}>Save</button>
            </Form>
            <br/>
            <Link to="/">Home</Link>
        </div>
    );
}

const LoginPage = withFormik({
    mapPropsToValues({email, password}) {
        return {
            email: email || "",
            password: password || "",
        };
    },
    /*validationSchema: Yup.object().shape({
        name: Yup.string()
            .required("Name is required"),
        email: Yup.string()
            .email("Email not valid")
            .required("Email is required"),
        password: Yup.string()
            .min(16, "Password must be 16 characters or longer")
            .required("Password is required")
    }),*/
    handleSubmit(values, {resetForm, setStatus, setSubmitting}) {

        axios
            .post("https://reqres.in/api/users_", values)
            .then(res => {
                console.log(res.data); // Data was created successfully and logs to console
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