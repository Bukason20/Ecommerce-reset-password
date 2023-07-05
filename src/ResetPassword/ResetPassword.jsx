import React, { useEffect } from 'react'
import { useState } from 'react'
import {useParams} from 'react-router-dom'
import styles from "./resetPassword.module.css"
import Logo from "../images/logo.png"
import Eye from "../images/eye.png"

function ResetPassword() {
    const [newPassword, setNewPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [passwordVisibility, setPasswordVisibility] = useState(false)
    const [data, setData] = useState("")
    const [message, setMessage] = useState("")

    const {token} = useParams()
    console.log(token)

    const forgotPassword = (e) => {
        e.preventDefault();
        setLoading(true)
        const formData = {
          password: newPassword
        }

        const response = fetch(`https://balethriftstore.onrender.com/api/v1/reset/password/${token}`, {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then((res) => res.json())
        .then((data) =>{
          setLoading(false)
          setData(data)
          console.log(data)
        })
        .catch((err) => console.log(err))

    }
    useEffect(() => {
      if(data !== undefined && data !== null){
        if(data.success !== null && data.success !== undefined && data.success == true){
          setMessage(data.message)
          setTimeout(() => {
            setMessage("")
          }, 2000)
        }else if(data.success !== null && data.success !== undefined && data.success == false){
          setMessage(data.message.message)
          setTimeout(() => {
            setMessage("")
          }, 2000)
        }
      }
    }, [data])
  return (
    <div className = {styles.Container}>
      <div className= {styles.logo}>
        <img src= {Logo} alt=""/>
      </div>
        <form onSubmit={forgotPassword}>
            <h2>Reset password</h2>
            <p>Input your new password</p>

            <p className= {`${data !== undefined && data !== null && data.success == true ? styles.success : styles.error}`}>{message}</p>

            <div className= {styles.inputGrp}>
              <label>Password</label>
              <div className= {styles.password}>
                <input type= {`${passwordVisibility ? "text" : "password"}`} name="" id="" placeholder="********" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required/>
                <img src= {Eye} alt="" onClick={() => setPasswordVisibility(!passwordVisibility)} id = {styles.seePassword}/>
              </div>
              
            </div>
            <button type='submit' className = {styles.btn}>
              {loading && "Loading..."}
              {!loading && "Reset Password"}
            
            </button>
            <div className= {styles.enquiries}>
              <p>For further support, kindly visit our help center or contact our customer service team.</p>
            </div>

        </form>
    </div>
  )
}

export default ResetPassword