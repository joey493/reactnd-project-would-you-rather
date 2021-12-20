import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Question = ({ id }) => {

    const { question, user } = useSelector(({ questions, users }) => {
        const question = questions[id]
        
        return {
            question,
            user: users[question.author],
        }
    })

    return (
        <div className='question'>
            <header >
                <img src={user.avatarURL} alt={user.id} />
                <h3>{user.name}</h3>
            </header>

            <div className="flex flex-col items-center">
                <h5>Would You Rather...</h5>
                <p className='my-8 self-start italic'>{question.optionOne.text}...</p>
                <Link className='btn' to={`/questions/${id}`}>Go to question</Link>
            </div>
        </div>
    )
}

export default Question
