import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import Answered from '../component/Answered'
import Unanswered from '../component/Unanswered'

export class Home extends Component {
    render() {
        const { match } = this.props

        return (
            <main className="main">
                <nav className='flex  overflow-hidden'>
                    <NavLink activeClassName='bg-main-color text-white' className='home-nav' to='/home/unanswered'>Unanswered</NavLink>
                    <NavLink activeClassName='bg-main-color text-white' className='home-nav' to='/home/answered'>Answered</NavLink>
                </nav>
                <Switch>
                    <Route exact path={`${match.url}/unanswered`} component={Unanswered} />
                    <Route exact path={`${match.url}/answered`} component={Answered} />
                </Switch>
            </main>
        )
    }
}

export default Home
