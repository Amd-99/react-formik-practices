import React from "react";
import { Formik, Form, FieldArray, Field } from "formik";
import TextFieldComp from "./Reusable Components/TextFieldComp";
import * as Yup from "yup";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const Form3 = () => {
  const validate = Yup.object({
    firstName: Yup.string().max(15, "it must be 15 characters or less "),
    // .required("required field"),
    lastName: Yup.string().max(15, "it must be 15 characters or less "),
    // .required("required field"),
    email: Yup.string().email("Enter Valid Email "),
    // .required("required field"),
    password: Yup.string().min(6, "Atleast length should be 6 "),
    // .required("required field"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Password must match"
    ),
    // .required("required field"),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        hobby: [{}],
      }}
      validationSchema={validate}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
      }}
    >
      {(formik) => {
        return (
          <>
            <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>

            <Form>
              <div className="row">
                <div className="col-4">
                  <TextFieldComp
                    label="First Name"
                    name="firstName"
                    type="text"
                  />
                  <TextFieldComp
                    label="Last Name"
                    name="lastName"
                    type="text"
                  />
                  <TextFieldComp label="Email" name="email" type="email" />
                  <TextFieldComp
                    label="Password"
                    name="password"
                    type="password"
                    autoComplete="off"
                  />
                  <TextFieldComp
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    autoComplete="off"
                  />
                  <button
                // disabled={!(formik.isValid && formik.dirty)}
                className="btn btn-dark mt-3"
                type="submit"
              >
                Register
              </button>
              <button
                disabled={!formik.dirty}
                className="btn btn-danger mt-3 ms-3"
                type="reset"
              >
                Reset
              </button>
                </div>

                <div className="col-8">
                <h3 className="my-4 font-weight-bold-display-4">Add Member</h3>
                  <FieldArray
                    name="hobby"
                    render={(arrayHelpers) => (
                      <div
                        className="d-flex flex-wrap ms-2 mt-3 border border-1 border-warning justify-content-center align-content-center"
                        style={{ background: "#" }}
                      >
                         
                        {formik.values.hobby &&
                         formik.values.hobby.length > 0 ? (
                          formik.values.hobby.map((hobby, index) => (
                            <div key={index} className="m-3">
                            
                              <TextFieldComp
                                label="fName"
                                name={`hobby.${index}.fName`}
                              />
                              <TextFieldComp
                                label="lName"
                                name={`hobby.${index}.lName`}
                              />

                              <button
                                className="btn-danger btn"
                                type="button"
                                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                              >
                                <RemoveIcon />
                              </button>
                              <button
                                className="btn-success btn ms-2"
                                type="button"
                                onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                              >
                                <AddIcon />
                              </button>
                            </div>
                          ))
                         )
                         : (
                          <button
                           type="button"
                          className="btn-secondary btn ms-2"
                             onClick={() => arrayHelpers.push("")}
                           >
                             {/* show this when user has removed all friends from the list */}
                             Add a hobby
                           </button>
                         )
                        }
                      </div>
                    )}
                  />
                </div>
              </div>

              
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default Form3;
