import { useSelector } from 'react-redux'
import Question from './Question'

const Unanswered = () => {
    const { unanswered } = useSelector(({ questions, currentUser }) => ({
        unanswered: Object.keys(questions).filter(qId => !Object.keys(currentUser.answers).includes(qId))
    }))

    return (
        <ul className='my-8'>
            {unanswered.map((id) => (
                <li key={id}>
                    <Question id={id} />
                </li>
            ))}
        </ul>
    )
}

export default Unanswered
