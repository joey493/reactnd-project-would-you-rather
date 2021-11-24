import { connect } from 'react-redux'
import { Component } from 'react'
import Question from '../question/Question'


export class Answered extends Component {
    render() {
        const { answered } = this.props
        return (
            <div>
                <ul>
                    {answered.map((id) => (
                        <li key={id}>
                            <Question id={id} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({ questions, currentUser }) => {
    const questionIds = Object.keys(questions)

    return {
        answered: questionIds.filter(qId => Object.keys(currentUser.answers).includes(qId))
    }
}
export default connect(mapStateToProps)(Answered)
