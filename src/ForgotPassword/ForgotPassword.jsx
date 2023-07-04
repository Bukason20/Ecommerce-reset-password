import React, { useState } from 'react'
import styles from "./forgotPassword.module.css"
import Logo from "../images/logo.png"

function ForgotPassword() {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState("")

    const forgotPassword = (e) => {
        e.preventDefault()
        setLoading(true)
        console.log("yes");
        const formData = {
          email: email
        }
        const response = fetch("https://balethriftstore.onrender.com/api/v1/reset/password", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then((res) => res.json())
        .then((data) =>{
          setLoading(false)
          console.log(data)
        })
        .catch((err) => console.log(err))
    }
  return (
    <div className = {styles.Container}>
      <div className= {styles.logo}>
        <img src= {Logo} alt=""/>
      </div>
        <form onSubmit={forgotPassword}>
            <h2>Forgot password</h2>
            <p>Input your email address to reset password</p>

            <div className= {styles.inputGrp}>
              <label>Email Address</label>
              <input type="email" name="" id="" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            
            <button type='submit' className = {styles.btn}>Reset password</button>
            <div className= {styles.enquiries}>
              <p>For further support, kindly visit our help center or contact our customer service team.</p>
            </div>
        </form>
        
    </div>
  )
}

export default ForgotPassword