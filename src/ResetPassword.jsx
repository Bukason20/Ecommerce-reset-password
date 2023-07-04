import React from 'react'
import { useState } from 'react'
import {useParams} from 'react-router-dom'

function ResetPassword() {
    const [newPassword, setNewPassword] = useState("")

    const {token} = useParams()
    console.log(token)

    const forgotPassword = (e) => {
        e.preventDefault();

    }
  return (
    <div>
        <form onSubmit={forgotPassword}>
            <h2>Reset password</h2>

            <input type="password" name="" id="" placeholder="Email Address" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            <button type='submit'>Reset password</button>

        </form>
    </div>
  )
}

export default ResetPassword