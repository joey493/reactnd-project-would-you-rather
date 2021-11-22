import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnsweredQ from '../../component/question/AnsweredQ'
import { handleSaveAnswer } from '../../redux/action/questions'

export class QuestionPage extends Component {
    state = {
        answer: '',
        answered: false
    }

    handleChange = (e) => {
        this.setState({ answer: e.target.value })
    }

    handleClick = () => {
        const { currentUser, question_id, dispatch } = this.props
        const { answer } = this.state

        dispatch(handleSaveAnswer({ authedUser: currentUser, qid: question_id, answer }))
        this.setState({ answered: true })

    }

    render() {
        const { question, user, question_id, users, currentUser } = this.props
        const { answered } = this.state
        const alreadyAnswered = Object.keys(users[currentUser].answers).includes(question_id)

        return (
            <div className='question'>
                {!question
                    ? <div>Not found 404</div>
                    : answered || alreadyAnswered
                        ? <AnsweredQ question={question} user={user} />
                        : <>
                            <div className='user'>
                                <img
                                    src={require(`../../utils/icons/${user.avatarURL}`).default}
                                    alt={user.id} /> {/* i will change it */}
                                <span className='userName'>{user.name}</span>
                            </div>

                            <div className="content">
                                <p>Would You Rather...</p>
                                <div className="options" onChange={this.handleChange}>
                                    <input type='radio' name='option' value='optionOne' id='optionOne' />
                                    <label htmlFor='optionOne'>{question.optionOne.text}</label><br />
                                    <input type='radio' name='option' value='optionTwo' id='optionTwo' />
                                    <label htmlFor='optionTwo'>{question.optionTwo.text}</label>
                                </div>
                                <button disabled={this.state.answer === '' ? true : false} onClick={this.handleClick}>Submit</button>
                            </div>
                        </>
                }
            </div>
        )
    }
}
const mapStateToProps = ({ questions, users, currentUser }, props) => {
    const { question_id } = props.match.params
    const question = questions[question_id]
    return {
        question,
        user: question && users[question.author],
        currentUser,
        users,
        question_id
    }
}
export default connect(mapStateToProps)(QuestionPage)
