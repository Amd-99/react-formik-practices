import React from "react";
import matrix from "../Assets/matrix.jpg"
import { Formik, Form } from "formik";
import TextFieldComp from "./Reusable Components/TextFieldComp";
import * as Yup from 'yup';





const Form3 = () => {

    const validate = Yup.object({
        firstName : Yup.string()
        .max(15,'it must be 15 characters or less ')
        .required( "required field"),
        lastName : Yup.string()
        .max(15,'it must be 15 characters or less ')
        .required("required field"),
        email : Yup.string()
        .email('Enter Valid Email ')
        .required("required field"),
        password : Yup.string()
        .min(6,"Atleast length should be 6 ")
        .required("required field"),
        confirmPassword : Yup.string()
        .oneOf([Yup.ref('password'),null], "Password must match")
        .required("required field"),
    })
  return (
<Formik
initialValues={{
    firstName: "",
    lastName  :"",
    email: "",
    password: "",
    confirmPassword: "",
}}
validationSchema={validate}
onSubmit={(values , { resetForm })=>{
   
    console.log(values);
    resetForm();
}}

>
    {formik =>{
      return(

        <div>
        <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
           
            <Form>
                 <TextFieldComp  label="First Name" name="firstName" type="text" />
                 <TextFieldComp label="Last Name" name="lastName" type="text" />
                 <TextFieldComp label="Email" name="email" type="email" />
                 <TextFieldComp label="Password" name="password" type="password" />
                 <TextFieldComp label="Confirm Password" name="confirmPassword" type="password" />
           
           <button disabled={!(formik.isValid && formik.dirty)} className="btn btn-dark mt-3" type="submit">Register</button>
           <button  className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
            </Form>
    
    </div>
      )
    }}
</Formik>
  );
};

export default Form3;
