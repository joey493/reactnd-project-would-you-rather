import { Component } from 'react'
import { connect } from 'react-redux'
import Question from '../question/Question'

export class Unanswered extends Component {
    render() {
        const { unanswered } = this.props
        
        return (
            <ul>
                {unanswered.map((id) => (
                    <li key={id}>
                        <Question id={id} />
                    </li>
                ))}
            </ul>
        )
    }
}

const mapStateToProps = ({ users, questions, currentUser }) => {
    const user = users[currentUser]
    const questionIds = Object.keys(questions)

    return {
        unanswered: questionIds.filter(qId => !Object.keys(user.answers).includes(qId))
    }
}

export default connect(mapStateToProps)(Unanswered)
