import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Switch, Route, NavLink } from 'react-router-dom'
import Answered from '../../component/answers/Answered'
import Unanswered from '../../component/answers/Unanswered'
import './Home.scss'

export class Home extends Component {
    render() {
        const { match } = this.props

        return (
            <section className='home-page container'>
                <NavLink className='nav-link' to='/home/unanswered'>Unanswered</NavLink>
                <NavLink className='nav-link' to='/home/answered'>Answered</NavLink>
                <Switch>
                    <Route exact path={`${match.url}/unanswered`} component={Unanswered} />
                    <Route exact path={`${match.url}/answered`} component={Answered} />
                </Switch>
            </section >
        )
    }
}

export default Home
