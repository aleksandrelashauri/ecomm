import React, { useEffect } from 'react'
// import { UserContext } from './store/UserProvider'
// import { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AdminPanel from './adminPanel/adminPanel'
import './App.scss'
import PrivatePage from './component/PrivitePage'
import PrivateRoute from './component/PriviteRoute'
import Login from './pages/login&signUp/login'
import SignUp from './pages/login&signUp/SingUp'
import Products from './pages/products'
import SecondBody from './pages/secContent/secContent'
import CartPage from './cart/CartPage'

import {
  ADMIN_PANEL,
  HOMEPAGE,
  LOGIN,
  PRIVATE,
  SIGN_UP,
  SINGLE_LIST,
CARTPAGE
} from './routes'
import { isToken } from './store/user/userActions'

function App() {
  // const userData = useContext(UserContext)
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(isToken)
  }, [])

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path={SIGN_UP} component={SignUp} />
          <Route exact path={LOGIN} component={Login} />
          <PrivateRoute exact path={ADMIN_PANEL} component={AdminPanel} />
          <Route exact path={SINGLE_LIST} component={SecondBody} />
          <PrivateRoute exact path={PRIVATE} component={PrivatePage} />
          <Route exact path={HOMEPAGE} component={Products} />
          <Route exact path={CARTPAGE} component={CartPage} />
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App