import { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { LogOut } from '../../redux/action/currentUser'

import './Navbar.scss'

export class Navbar extends Component {
    render() {
        const { user, dispatch } = this.props

        return (
            <header>
                <div className="container">
                    <nav>
                        <NavLink className='nav-link' to='/home'>Home</NavLink>
                        <NavLink className='nav-link' to='/add'>New Question</NavLink>
                        <NavLink className='nav-link' to='/leaderboard'>Leader Board</NavLink>
                    </nav>
                    {user &&
                        <div className="user">
                            <span className='avatar'>
                                <img
                                    src={require(`../../utils/icons/${user.avatarURL}`).default}
                                    alt={user.id} /> 
                            </span>
                            <span className="userName">{user.name}</span>
                            <span className="logout" onClick={() => dispatch(LogOut())}></span>
                        </div>
                    }
                </div>
            </header>
        )
    }
}

const mapStateToProps = ({ currentUser, users }) => ({ user: currentUser ? users[currentUser] : null })

export default connect(mapStateToProps)(Navbar)
