import React, { useState } from 'react'
import Signup from './Signup';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';

function App() {
  const [email, setEmail] = useState("")

 
  return (
    <Router>
      <Switch>
        <Route path = "/forgotPassword">
          <ForgotPassword />
        </Route>
        <Route path = "/api/v1/reset/password/:token:.token2">
          <ResetPassword />

        </Route>
      </Switch>
    </Router>
    // <div>

    //   <Signup />
    //   <form onSubmit={resetPassword}>
    //     <h2>Forgot password</h2>

    //     <input type="email" name="" id="" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
    //     <button type='submit'>Reset password</button>

    //   </form>
    // </div>
  )
}

export default App
