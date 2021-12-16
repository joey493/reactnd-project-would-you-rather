import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser } from '../redux/action/currentUser'

const SignIn = () => {
    const [user, setUser] = useState('')
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    const userIds = Object.keys(users)

    const handleChange = (e) => {
        e.target.value === 'none'
            ? setUser('')
            : setUser(e.target.value)
    }

    const handleSubmit = () => dispatch(setCurrentUser(users[user]))
    return (
        <main className=' main text-center p-6'>
            <header>
                <h1 className='text-2xl font-bold'>Welcome to Would You Rather</h1>
            </header>
            <p className='p-8 font-bold'>SignIn to continue</p>
            <div className="flex justify-evenly">
                <select className="px-4 py-2 set-border bg-white" onChange={handleChange}>
                    <option value="none">Select a User</option>
                    {userIds.map((userId) => (
                        <option key={userId} value={userId}>{users[userId].name}</option>
                    ))}
                </select>
                <button className='btn'
                    disabled={user === '' ? true : false} onClick={handleSubmit}>Sign In</button>
            </div>
        </main>
    )
}

export default SignIn