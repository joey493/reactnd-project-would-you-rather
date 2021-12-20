import { useSelector } from 'react-redux'

import Question from './Question'


const Answered = () => {
    const { answered } = useSelector(({ questions, currentUser }) => ({
        answered: Object.keys(questions).filter(qId => Object.keys(currentUser.answers).includes(qId)
        )})
    )
    return (
        <ul className='my-8'>
            {answered.map((id) => (
                <li key={id}>
                    <Question id={id} />
                </li>
            ))}
        </ul>
    )
}

export default Answered
