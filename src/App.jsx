import React, { useState } from 'react'
import Signup from './Signup';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import ForgotPassword from './ForgotPassword/ForgotPassword';
import ResetPassword from './ResetPassword/ResetPassword';

function App() {
  const [email, setEmail] = useState("")

 
  return (
    <Router>
      <Switch>
        <Route path = "/forgotPassword">
          <ForgotPassword />
        </Route>
        <Route path = "/reset/password/:token(.*)">
          <ResetPassword />

        </Route>
      </Switch>
    </Router>
    
  )
}

export default App
