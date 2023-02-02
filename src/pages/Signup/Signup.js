import { useState } from "react"
import { useHistory} from "react-router-dom";
import './Signup.css';

function Signup(props){

        const history = useHistory()
        const [userData, setUserData] = useState({
            name: "",
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
        })

        const [error, setErros] = useState({
            name: null,
            email: null,
            username: null,
            password: null,
            confirmPassword: null,
        })

        const changeUserData = (e) => {
            console.log(e.target.name)
            if(e.target.name === "username"){
                setUserData({
                    ...userData,
                    username: e.target.value
                })

                setErros({
                    ...error, 
                    username: e.target.value.length === 0 ? "userName is required" : 
                    e.target.value.length < 3 ? "please enter more than 3 characters" : 
                    !e.target.value.match(/^\S*$/) ? "please don't enter spaces" : null
                })
            }else if(e.target.name === "email"){
                setUserData({
                    ...userData,
                    email: e.target.value
                })

                setErros({
                    ...error,
                    email: e.target.value.length === 0 ? "Email is required" : 
                    !e.target.value.match(/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i) ? "not proper email format" : null
                })
            }else if(e.target.name === "name"){
                setUserData({
                    ...userData,
                    name: e.target.value
                })

                setErros({
                    ...error,
                    name: e.target.value.length === 0 ? "Name is required" : null
                })
            }else if(e.target.name === "password"){
                setUserData({
                    ...userData,
                    password: e.target.value
                })

                setErros({
                    ...error,
                    password: e.target.value.length === 0 ? "Password is required" : 
                    e.target.value.length < 8 ? "please enter more than 8 characters" : 
                    !e.target.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i) ? "not proper password format" : null
                    
                })
            }else{
                setUserData({
                    ...userData,
                    confirmPassword: e.target.value
                })

                setErros({
                    ...error,
                    confirmPassword: e.target.value.length === 0 ? "confirm password is required" : e.target.value.length !== 8 ? "not match" : null
                })
            }

        }

        const submitData = (e) => {
            e.preventDefault()
            history.push("/")
        }


    return(
        <div className="container mt-3">
            <h1 className="mb-4"> Sign up Form </h1>
            <form onSubmit={(e) => submitData(e)}  className="border rounded-3 p-5 mb-5">
                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1"  className="text-dark fs-3">Name</label>
                <input name="name" type="text"
                className={`form-control ${error.name && "border-danger"}`}
                value={userData.name} onChange={(e) => changeUserData(e)}  />

                <p className="text-danger mt-2 fs-5">  {error.name}  </p>

                </div>
                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1"  className="text-dark fs-3">User Name</label>
                <input name="username" type="text"
                className={`form-control ${error.username && "border-danger"}`}
                value={userData.username} onChange={(e) => changeUserData(e)}  />
                
                <p className="text-danger mt-2 fs-5">  {error.username}  </p>

                </div>
                <div className="mb-3">
                <label  className="text-dark fs-3">Email</label>
                <input name="email"  className={`form-control ${error.email && "border-danger"}`}  
                value={userData.email} onChange={(e) => changeUserData(e)}/>

                <p className="text-danger mt-2 fs-5"> {error.email} </p>

                </div>
                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1"  className="text-dark fs-3">Password</label>
                <input name="password" type="password"
                className={`form-control ${error.password && "border-danger"}`}
                value={userData.password} onChange={(e) => changeUserData(e)}  />

                <p className="text-danger mt-2 fs-5">  {error.password}  </p>

                </div>
                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1"  className="text-dark fs-3">Confirm Password</label>
                <input name="confirmPassword" type="password"
                className={`form-control ${error.confirmPassword && "border-danger"}`}
                value={userData.confirmPassword} onChange={(e) => changeUserData(e)}  />

                <p className="text-danger mt-2 fs-5">  {error.confirmPassword}  </p>

                </div>
                <button  className="btn btn-danger fs-5 mt-4" type="submit">Submit</button>
            </form> 
            
        </div>
        
    )
}

export default Signup