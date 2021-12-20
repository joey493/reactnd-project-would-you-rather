import { useEffect } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import handleInitialData from './redux/action'
import Navbar from './component/Navbar'
import SignIn from './page/SignIn'
import Home from './page/Home';
import NewQ from './page/NewQ';
import Leaderboard from './page/Leaderboard'
import QuestionPage from './page/Question';

const App = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const currentUser = useSelector(state => state.currentUser)

  useEffect(() => {
    dispatch(handleInitialData())
  })

  return (
    <>{location.pathname === '/' || location.pathname === '/home'
      ? <Redirect to='/home/unanswered' />
      : <div>
        <Navbar />
        {currentUser === null ? <SignIn />
          : <Switch>
            <Route path='/home' component={Home} />
            <Route path='/add' component={NewQ} />
            <Route path='/leaderboard' component={Leaderboard} />
            <Route path='/questions/:question_id' component={QuestionPage} />
          </Switch>
        }
      </div>

    }</>
  )
}

export default App
