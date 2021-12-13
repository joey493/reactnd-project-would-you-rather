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
            <div className='border-main-color border-2 mx-auto my-16 w-40em text-center p-6 rounded-md'>
                <header>
                    <h1 className='text-2xl font-bold'>Welcome to Would You Rather</h1>
                </header>
                <p className='p-8 font-bold'>SignIn to continue</p>
                <div className="flex justify-evenly" onSubmit={this.handleSubmit}>
                    <select className="px-4 py-2 border-2 border-main-color rounded-md" onChange={this.handleChange}>
                        <option value="none">Select a User</option>
                        {userIds.map((userId) => (
                            <option key={userId} value={userId}>{users[userId].name}</option>
                        ))}
                    </select>
                    <button className='border-2 border-main-color px-4 py-2 rounded-md uppercase font-bold text-white bg-main-color cursor-pointer
                        disabled:bg-disabled hover:text-main-color hover:bg-white custom-transition'
                        disabled={this.state.userId === '' ? true : false} onClick={this.handleSubmit}>Sign In</button>
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



