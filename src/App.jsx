import { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import handleInitialData from './redux/action'
import Navbar from './component/Navbar'
import SignIn from './page/SignIn'
import Home from './page/Home';
import NewQ from './page/NewQ';
import Leaderboard from './page/Leaderboard'
import QuestionPage from './page/Question';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }


  render() {
    const { currentUser, location } = this.props
    if (location.pathname === '/' || location.pathname === '/home') return <Redirect to='/home/unanswered' />

    return (
      <div>
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
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default withRouter(connect(mapStateToProps)(App))
