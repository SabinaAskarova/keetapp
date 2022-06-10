import React, { useState } from 'react'
import Axios from 'axios'
import '../Newregister/Newregister.css'
import { Link, useNavigate } from 'react-router-dom'
import { BiHomeAlt } from 'react-icons/bi'
import { FaRegEyeSlash } from 'react-icons/fa';

export default function Newregister() {
  const style = {
    marginTop: "-9px",
    fontSize: "8px"
  }
  const homestyle = {
    fontSize: '4rem',
    float: 'right',
    margin: '20px 30px',
    color: 'purple'

  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isError, setisError] = useState("");
  const [lenghtError, setlenghtError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const submitForm = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3001/api/insert', {
      email: email,
      password: password
    }).then(function (response) {
      navigate("../login", { replace: true });
      console.log(response);
    })
      .catch(function (error) {
        console.log(error);
      });
  }

  const checkValidation = () => {
    // setConfirmPassword(e.target.value);
    if (password != confirmPassword) {
      setisError("Passwords must be same!")
      console.log(isError);
    }

  }
  const checkLength = () => {
    if (password.length <= 8) {
      setlenghtError("Password min lenght must be 8 symbols! ")
      console.log(setlenghtError)
    }
    else {
      setlenghtError("")
    }
  }




  return (

    <div>
      <Link to="/">
        <BiHomeAlt style={homestyle} />

      </Link>
      <div className="login-box">

        <h3>Register</h3>
        <form>

          <input type="email"
            onChange={(e) => setEmail(e.target.value)}
            name="" placeholder="Enter your e-mail..." required />
 <div style={{position: 'relative',right: "-2px"}}>
          <input type={showPassword ? "text" : "password"}
            onChange={(e) => {
              setPassword(e.target.value)
              checkLength()
            }}
            name="" placeholder="Enter password..." required />
             <a style={{position:'absolute', top:'3px',right: '10px'}}  onClick={() => {
              setShowPassword(!showPassword)
            }} ><FaRegEyeSlash size={15} />
            </a>
            </div>
          <div style={{ color: 'red', marginTop: '-17px' }} >{lenghtError}</div>

            <input type={showPassword ? "text" : "password"}

              onChange={(e) => {
                setConfirmPassword(e.target.value)
                checkValidation()
              }}
              value={confirmPassword}
              name="confirmpassword"
              placeholder="Repeat password again..." required />
           

          <div style={{ color: 'red', marginTop: '-17px' }} >{isError}</div>

          <input type="submit" onClick={submitForm} name="" value="Sign up" />

          <Link to='/login' style={style}>Already have an account?<span> </span></Link>
        </form>
      </div>


    </div>
  )
}
