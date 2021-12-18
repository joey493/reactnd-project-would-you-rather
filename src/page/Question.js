import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AnsweredQ from '../component/AnsweredQ'
import { handleSaveAnswer } from '../redux/action/questions'


const QuestionPage = () => {
    const [ answer, setAnswer ] = useState('')
    const [submited, setSubmited] = useState(false)
    const { question_id } = useParams()
    const dispatch = useDispatch()

    const {question, user, currentUser} = useSelector(({questions, users, currentUser}) => {
        const question = questions[question_id]
        return {
            question,
            user: question && users[question.author],
            currentUser,
        }
    })

    const handleClick = () => {
        dispatch(handleSaveAnswer({ authedUser: currentUser.id, qid: question_id, answer }))
        setSubmited(true)
    }

    const alreadyAnswered = Object.keys(currentUser.answers).includes(question_id)

    return (
        <div>
            {!question
                ? <div>Not found 404</div>
                : submited || alreadyAnswered
                    ? <AnsweredQ question={question} user={user} />
                    : <div className='question'>
                        <header>
                            <img className='avatar'
                                src={user.avatarURL}
                                alt={user.id} />
                            <h3 className='userName'>{user.name}</h3>
                        </header>
                        <div className='text-center'>
                            <h5>Would You Rather...</h5>
                            <div className="text-left my-6 text-lg italic" onChange={(e) => setAnswer(e.target.value)}>
                                <input className='mr-4 mb-4' type='radio' name='option' value='optionOne' id='optionOne' />
                                <label htmlFor='optionOne'>{question.optionOne.text}</label><br />
                                <input className='mr-4' type='radio' name='option' value='optionTwo' id='optionTwo' />
                                <label htmlFor='optionTwo'>{question.optionTwo.text}</label>
                            </div>
                            <button className='btn' disabled={answer === '' ? true : false} onClick={handleClick}>Submit</button>
                        </div>
                    </div>
            }
        </div>
    )
}

export default QuestionPage
