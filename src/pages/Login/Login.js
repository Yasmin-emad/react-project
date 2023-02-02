import { useState } from "react";
import './Login.css';


export const Login = () => {
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
      };

      const validate = (values) => {
        const errors = {};
        const email_regex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
        const pass_regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i;
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!email_regex.test(values.email)) {
          errors.email = "please enter a proper Email formate";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 8 characters";
        } else if(!pass_regex.test(values.password)){
          errors.password = "please enter a proper Password formate";
        } else if (values.password.length > 10) {
          errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
      };

      let flag = "text";
      let flag2 = true;

      const change = () => {
        flag = "password"
        flag2 = !flag2
      }


    return(
        <>
          <div className="container mt-3">
            <h1 className="mb-4">Log in Form</h1>
          <form onSubmit={handleSubmit} className="border rounded-3 p-5 mb-5">
                <div className="form-group mt-2">
                <label htmlFor="email" className="text-dark fs-3">Email</label>
                <input
                    type="text"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    className="form-control bg-light"
                />
                </div>
                <p className="text-danger mt-2 fs-5">{formErrors.email}</p>
                <label htmlFor="password" className="text-dark fs-3">Password</label>
                <div className="form-group mt-4 d-flex flex-row">
                <input
                    type={`${flag2 ? "password" : "text"}`}
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                    className="form-control"
                    // onClick={change()}
                />
                <i className={`${flag === "password" ? 'fa-solid fa-eye fs-5 mt-3 ms-2' : 'fa-solid fa-eye-slash  fs-5 mt-3 ms-2' }`} id="icon"  onClick={change()}></i>
                </div>
                <p className="text-danger mt-2 fs-5">{formErrors.password}</p>
                <button type="submit" className="btn btn-danger fs-5 mt-4 b">submit</button>
            </form>
          </div>
            
        </>
    )
}