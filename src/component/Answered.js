import { connect } from 'react-redux'
import { Component } from 'react'
import Question from './Question'


export class Answered extends Component {
    render() {
        const { answered } = this.props
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
}

const mapStateToProps = ({ questions, currentUser }) => {
    const questionIds = Object.keys(questions)

    return {
        answered: questionIds.filter(qId => Object.keys(currentUser.answers).includes(qId))
    }
}
export default connect(mapStateToProps)(Answered)
