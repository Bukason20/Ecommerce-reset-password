import React, { useState } from 'react'

function Signup() {
    const [email, setEmail] = useState("")
    const [fullname, setFullName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")
    const signUp = (e) => {
        e.preventDefault();
        const formData = {
            fullname: fullname,
            email: email,
            phoneNumber: phoneNumber,
            password: password
        }

        const response = fetch("https://balethriftstore.onrender.com/api/v1/auth/signup", {
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
        <div>Signup
            <form onSubmit={signUp}>
                <h2>Forgot password</h2>

                <input type="text" name="" id="" placeholder="Full Name" value={fullname} onChange={(e) => setFullName(e.target.value)} />
                <input type="text" name="" id="" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" name="" id="" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <input type="password" name="" id="" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Sign Up</button>

            </form>
        </div>
    )
}

export default Signup