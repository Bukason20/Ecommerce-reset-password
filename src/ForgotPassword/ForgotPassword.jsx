import React, { useEffect, useState } from 'react'
import styles from "./forgotPassword.module.css"
import Logo from "../images/logo.png"
import Check from "../images/check.png"
import Close from "../images/close.png"


function ForgotPassword() {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [data, setData] = useState("")
    const [message, setMessage] = useState("")

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
          data.success ? setShowModal(true) : setShowModal(false)
          setData(data)
          console.log(data)
        })
        .catch((err) => console.log(err))
    }

    useEffect(() => {
      if(data !== undefined && data !== null){
        if(data.success !== null && data.success !== undefined && data.success == false){
          setMessage(data.message)
          setTimeout(() => {
            setMessage("")
          }, 2000)
        }
      }
    }, [data])
  return (
    <div className = {styles.Container}>
      <div className= {`${styles.overlay} ${!showModal ? styles.hidden : ""}`}></div>
      <div className= {styles.logo}>
        <img src= {Logo} alt=""/>
      </div>
        <form onSubmit={forgotPassword}>
            <h2>Forgot password</h2>
            <p>Input your email address to reset password</p>

            <p className= {styles.error}>{message}</p>

            <div className= {styles.inputGrp}>
              <label>Email Address</label>
              <input type="email" name="" id="" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            
            <button type='submit' className = {styles.btn}>
              {loading && "Loading..."}
              {!loading && "Reset Password"}
            
            </button>
            <div className= {styles.enquiries}>
              <p>For further support, kindly visit our help center or contact our customer service team.</p>
            </div>
        </form>

      {showModal && <div className= {styles.modal}>
        <img src= {Check} alt="" id = {styles.check}/>
        <h2>Password Reset Link Sent</h2>

        <p>Kindly proceed to your email and click on the provided link to reset your Bale password</p>

        <div className= {styles.close} onClick = {() => setShowModal(false)}>
          <img src= {Close} alt=""/>
        </div>
      </div> }
        
    </div>
  )
}

export default ForgotPassword