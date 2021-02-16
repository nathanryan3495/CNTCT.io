import React from "react";
import { Wizard, Steps, Step } from 'react-albus';
import Navigation from './Navigation';
import { useFormik } from "formik";
import Loader from "./LoadingComponent";
import AlertComponent from "./AlertComponent";
import { validateEmail } from "../utils/_ValidateEmail";

const ContactForm = () => {
    const [hasError, setError] = React.useState(false);
    const [formIsSubmitting, setFormIsSubmitting] = React.useState(false);
    const [successfullFormSubmission, setFormSubmissionSuccessful] = React.useState(false);

    const formik = useFormik({
        initialValues: { 
            name: "",
            email: "",
            telephone: "",
            address: "",
         },
        onSubmit: (values,) => {
            setFormIsSubmitting(true);

            if (values.name === "" || (values.email === "" && validateEmail(values.email)) || values.telephone === ""  || values.address === "" ) {    
                setFormIsSubmitting(false);
                setError(true);
            } else {
                fetch('https://formspree.io/f/xaylazjw', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values)
                  }).then(function(response) {
                    return response.status !== 200 ? setError(true) : (
                        setFormSubmissionSuccessful(true),setTimeout(() => {window.location.reload();}, 3000)
                    );
                  });
            }

            setFormIsSubmitting(false);
        }
      });

      React.useEffect( ()=> {
        setTimeout(() => {
            setError(false);
        }, 3000);
      }, [hasError]);

    return (
        <>
            <form className="form" onSubmit={formik.handleSubmit}>
                {successfullFormSubmission && 
                    <AlertComponent errorTitle={"Thank you!"} errorBody={"We will be in contact soon."} alertType={"success"} />
                }
                {!successfullFormSubmission &&
                    <Wizard>
                        <input type="hidden" name="id" value="123456"/>
                        {!formIsSubmitting &&
                        <Steps>
                            <Step id="name">
                                <div className="form-group">
                                    <label className="form-group__label">Name</label>
                                    <input className="form-group__input" type="text" name="name" onChange={formik.handleChange} value={formik.values.name}/>
                                </div>
                            </Step>
                            
                            <Step id="email">
                                <div className="form-group">
                                    <label className="form-group__label">Email</label>
                                    <input className="form-group__input" type="text" name="email" onChange={formik.handleChange} value={formik.values.email}/>
                                </div>
                            </Step>
                            
                            <Step id="phoneNumber">
                                <div className="form-group">
                                    <label className="form-group__label">Telephone number</label>
                                    <input className="form-group__input" type="number" name="telephone" onChange={formik.handleChange} value={formik.values.telephone}/>
                                </div>
                            </Step>
                            
                            <Step id="address">
                                <div className="form-group">
                                    <label className="form-group__label">Address</label>
                                    <input className="form-group__input" type="text" name="address" onChange={formik.handleChange} value={formik.values.address}/>
                                </div>
                            </Step>
                        </Steps>
                        }
                        {hasError &&
                            <AlertComponent errorTitle={"Ooops something's gone wrong"} errorBody={"Please go back through the form and make sure you have filled everything out."} alertType={"warning"} />
                        }

                        {!formIsSubmitting &&
                            <Navigation/> 
                        }

                        {formIsSubmitting && 
                            <Loader/>
                        }
                    </Wizard>
                }
            </form>
        </>
    );
};

export default ContactForm;