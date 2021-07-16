import Navbar from './navbar/Navbar'
import Home from './home/Home'
import Login from './login/Login'
import Signup from './signup/Signup'
import About from './about/About'
import Newuser from './user/Newuser'
import User from './user/User'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/Login'>
          <Login />
        </Route>
        <Route path='/Signup'>
          <Signup />
        </Route>
        <Route path='/About'>
          <About />
        </Route>

        <Route path='/Newuser'>
          <Newuser />
        </Route>
        <Route path='/User'>
          <User />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
