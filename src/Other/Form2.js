import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import * as yup from "yup";
import RedErrorMessage from "../Components/Error/RedErrorMessage";

const validationSchema = yup.object({
  name: yup.string().required("name is required"),
  phone: yup
    .number()
    .min(1000000000, "Enter Ten Digit Numbers only")
    .max(10000000000, "Enter Ten Digit Numbers only")
    .required("Enter Number"),
  password: yup
    .string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "A minimum 8 characters password contains a combination of uppercase and lowercase letter and number are required"
    )
    .required("Password is Required"),
  gender: yup.string().required("Select out of one"),
  date: yup.date().required("Date is required"),
  income: yup.string().required("required field"),
  about: yup
    .string()
    .min(7, "Min 7 char is requied")
    .max(500, "Max 500 char is allowed")
    .required("enter details about you"),
  social: yup.object().shape({
    facebook: yup.string().required("required field"),
    twitter: yup.string().required(" required field"),
  }),
  skills: yup.array().of(
    yup.string("String is Reruired")
    .required("Reruired field")).required("Required Field"),

    
    hobby: yup.array().of(
      yup.string("required field")
    ).min(1, "atleast one hobby is required").required("enter at least on hoby")
  
});

const Form2 = () => {
  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{
          name: "",
          phone: "",
          password: "",
          confirmPassword : "",
          gender: "",
          date: "",
          income: "",
          about: "",
          social: {
            facebook: "",
            twitter: "",
          },
          skills: [],
          hobby: [],
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form>
            <label>Name:</label>
            <Field name="name" type="text" /> 

            <RedErrorMessage name="name" />

            <label>Number:</label>
            <Field name="phone" type="number"  />

            <RedErrorMessage name="phone" />

         <div>
         <label>Password:</label>
            <Field name="password" type="password" autoComplete="off" />
            <RedErrorMessage name="password" />


            <label>Confirm Password:</label>
            <Field name="confirmPassword" type="c" autoComplete="off" />
            <RedErrorMessage name="paconfirmPasswordssword" />
         </div>
            <div>
              <label>Gender:</label>

              <label>Male:</label>
              <Field name="gender" value="Male" type="radio" />

              <label>Female:</label>
              <Field name="gender" value="Female" type="radio" />
              <RedErrorMessage name="gender" />
            </div>

            <label>Date:</label>
            <Field name="date" type="date" />
            <RedErrorMessage name="date" />

            <label>Income:</label>
            <Field name="income" as="select">
              <option value="0">0 rs</option>
              <option value="100">100 rs</option>
              <option value="200">200 rs</option>
            </Field>
            <RedErrorMessage name="income" />

            <label>About:</label>
            <Field name="about" as="textarea" />
            <RedErrorMessage name="about" />

            <label>Social:</label>

            <label>Facebook:</label>
            <Field name="social.facebook" type="text" />
            <RedErrorMessage name="social.facebook" />
            <br />
            <label>Twitter:</label>
            <Field name="social.twitter" type="text" />
            <RedErrorMessage name="social.twitter" />

            <label>Skills:</label>

            <label>Technical:</label>
            <Field name="skills[0]" type="text" />
            <RedErrorMessage name="skills[0]" />
            <label>Other:</label>
            <Field name="skills[1]" type="text" />
            <RedErrorMessage name="skills[0]" />

            <FieldArray
              name="hobby"
              render={(arrayHelpers) => (
                <div>
                  {values.hobby && values.hobby.length > 0 ? (
                    values.hobby.map((hobby, index) => (
                      <div key={index}>
                        <Field name={`hobby.${index}`} />
                        <RedErrorMessage name={`hobby.${index}`}/>
                        <button
                          type="hobby"
                          onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                        >
                          +
                        </button>
                      </div>
                    ))
                  ) : (
                    <button type="button" onClick={() => arrayHelpers.push("")}>
                      {/* show this when user has removed all friends from the list */}
                      Add a hobby
                    </button>
                  )}
                </div>
              )}
            />
            <RedErrorMessage name="hobby" />

            <br />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Form2;
