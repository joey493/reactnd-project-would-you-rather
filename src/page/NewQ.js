import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleSaveQuestion } from '../redux/action/questions'

const NewQ = () => {
    const [ optionOneText, setOptionOne ] = useState('')
    const [ optionTwoText, setOptionTwo ] = useState('')
    const [ toHome, setToHome ] = useState(false)
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.currentUser)

    const handleOption = (e, option) => {
        if (option === 'one') setOptionOne(e.target.value);
        if (option === 'two') setOptionTwo(e.target.value);
    }

    const handleSubmit = () => {
        dispatch(handleSaveQuestion({ optionOneText, optionTwoText, author: currentUser.id }))

        setToHome({ toHome: true })
    }

    return (
        <>{toHome 
            ? <Redirect to='/home' />
            :<div className='main p-8 flex flex-col items-center'>
                <h2 className='font-bold text-lg mb-8'>Would You Rather...</h2>
                {/* options */}
                <input className='set-border w-full px-4 py-2' placeholder='Option 1' onChange={e => handleOption(e, 'one')} />
                <p className='font-bold text-lg my-6'>Or</p>
                <input className='set-border w-full px-4 py-2' placeholder='Option 2' onChange={e => handleOption(e, 'two')} />
                <button className='mt-6 mx-auto btn' onClick={handleSubmit} disabled={optionOneText === '' || optionTwoText === ''}>Submit</button>
            </div>
        }
        </>
    )
}

export default NewQ
