import { Component } from 'react'
import { connect } from 'react-redux'
import { setCurrentUser } from '../../redux/action/currentUser'
import './SignIn.scss'
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
        this.props.dispatch(setCurrentUser(this.state.userId))
    }

    render() {
        const { userIds, users } = this.props

        return (
            <div className='sign-in'>
                <header>
                    <h3>Welcome to the Would You Rather App</h3>
                </header>
                <div className="sign-form" onSubmit={this.handleSubmit}>
                    <p>SignIn to continue</p>
                    <select className="dropmenu" onChange={this.handleChange}>
                        <option value="none">Select a User</option>
                        {userIds.map((userId) => (
                            <option key={userId} value={userId}>{users[userId].name}</option>
                        ))}
                    </select>
                    <button disabled={this.state.userId === '' ? true : false} onClick={this.handleSubmit}>Sign In</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ users }) => ({
    userIds: Object.keys(users),
    users
})

export default connect(mapStateToProps)(SignIn)



