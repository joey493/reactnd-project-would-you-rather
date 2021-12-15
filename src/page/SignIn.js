import { Component } from 'react'
import { connect } from 'react-redux'
import { setCurrentUser } from '../redux/action/currentUser'
// import './SignIn.scss'

export class SignIn extends Component {
    state = {
        userId: '',
    }

    handleChange = (e) => {
        const target = e.target.value

        target === 'none'
            ? this.setState({ userId: '' })
            : this.setState({ userId: target })
    }

    handleSubmit = () => {
        this.props.dispatch(setCurrentUser(this.props.users[this.state.userId]))
    }

    render() {
        const { userIds, users } = this.props

        return (
            <main className=' main text-center p-6'>
                <header>
                    <h1 className='text-2xl font-bold'>Welcome to Would You Rather</h1>
                </header>
                <p className='p-8 font-bold'>SignIn to continue</p>
                <div className="flex justify-evenly" onSubmit={this.handleSubmit}>
                    <select className="px-4 py-2 set-border bg-white" onChange={this.handleChange}>
                        <option value="none">Select a User</option>
                        {userIds.map((userId) => (
                            <option key={userId} value={userId}>{users[userId].name}</option>
                        ))}
                    </select>
                    <button className='btn'
                        disabled={this.state.userId === '' ? true : false} onClick={this.handleSubmit}>Sign In</button>
                </div>
            </main>
        )
    }
}

const mapStateToProps = ({ users }) => ({
    userIds: Object.keys(users),
    users
})

export default connect(mapStateToProps)(SignIn)



