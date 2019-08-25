import {withFormik, Form, Field} from "formik";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";

function RegistrationForm({isSubmitting, status}) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (status) {
            setUsers([...users, status]);
        }
    }, [status, users]);

    return (
        <div className="reactContainer">
            <h1>Register Here</h1>
            <Form>
                <div className="fieldContainer">
                    <Field type="username" name="username" placeholder="Username"/>
                </div>
                <div className="fieldContainer">
                    <Field type="password" name="password" placeholder="Password"/>
                </div>
                <div className="fieldContainer">
                    <Field type="birthdate" name="birthdate" placeholder="Birthdate"/>
                </div>
                <button disabled={isSubmitting}>Save</button>
            </Form>
            <br/>
            <Link to="/">Home</Link>
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
            })
            .catch(err => {
                console.log(err); // There was an error creating the data and logs to console
                setSubmitting(false);
            });

    }
})(RegistrationForm);

export default RegistrationPage;

/*
* /api/register "POST"
	1. Registers a new user to the database
  2. Takes an object with properties "username", "password"
	  * {username: "lorem", password: "lorem", birthdate: "Standard Date such as 'new Date()'" }
	  * all three are required
* /api/login "POST"
  1. Login existing user. Returns the web token.
	2. Takes an object with properties "username", "password"
	  * {username: "lorem", password: "lorem"}
		* both are reqired
	3. Successful login returns web token
	4. Unsuccessful returns an object with the error in question */
