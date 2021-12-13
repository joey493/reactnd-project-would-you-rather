import { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { LogOut } from '../redux/action/currentUser'
import {FiLogOut} from 'react-icons/fi'

export class Navbar extends Component {
    render() {
        const { user, dispatch } = this.props
        console.log(user)
        return (
            <header className='shadow-nav-sh '>
                <div className="container flex justify-between">
                    <nav className='flex gap-4 items-center'>
                        <NavLink className='main-nav' to='/home' activeClassName='main-active-nav'>Home</NavLink>
                        <NavLink className='main-nav' to='/add' activeClassName='main-active-nav'>New Question</NavLink>
                        <NavLink className='main-nav' to='/leaderboard' activeClassName='main-active-nav'>Leader Board</NavLink>
                    </nav>
                    {user &&
                        <div className="flex items-center gap-4 ">
                            <span >{user.name}</span>
                            <img className='h-12 rounded-full' src={user.avatarURL} alt={user.id} /> 
                            <FiLogOut className="w-6 h-6 cursor-pointer hover:text-main-color" onClick={() => dispatch(LogOut())}></FiLogOut>
                        </div>
                    }
                </div>
            </header>
        )
    }
}

const mapStateToProps = ({ currentUser }) => ({ user: currentUser ? currentUser : null })

export default connect(mapStateToProps)(Navbar)
