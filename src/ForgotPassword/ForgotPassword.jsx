import React, { useState } from 'react'

function ForgotPassword() {
    const [email, setEmail] = useState("")

    const forgotPassword = (e) => {
        e.preventDefault()
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
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
    }
  return (
    <div>
        <form onSubmit={forgotPassword}>
            <h2>Forgot password</h2>

            <input type="email" name="" id="" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type='submit'>Reset password</button>

        </form>
    </div>
  )
}

export default ForgotPassword