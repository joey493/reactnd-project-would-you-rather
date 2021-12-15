import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnsweredQ from '../component/AnsweredQ'
import { handleSaveAnswer } from '../redux/action/questions'

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

        dispatch(handleSaveAnswer({ authedUser: currentUser.id, qid: question_id, answer }))
        this.setState({ answered: true })
    }

    render() {
        const { question, user, question_id, currentUser } = this.props
        const { answered } = this.state
        const alreadyAnswered = Object.keys(currentUser.answers).includes(question_id)
        return (
            <div>
                {!question
                    ? <div>Not found 404</div>
                    : answered || alreadyAnswered
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
                                <div className="text-left my-6 text-lg italic" onChange={this.handleChange}>
                                    <input class='mr-4 mb-4' type='radio' name='option' value='optionOne' id='optionOne' />
                                    <label htmlFor='optionOne'>{question.optionOne.text}</label><br />
                                    <input class='mr-4' type='radio' name='option' value='optionTwo' id='optionTwo' />
                                    <label htmlFor='optionTwo'>{question.optionTwo.text}</label>
                                </div>
                                <button class='btn' disabled={this.state.answer === '' ? true : false} onClick={this.handleClick}>Submit</button>
                            </div>
                        </div>
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
        question_id
    }
}
export default connect(mapStateToProps)(QuestionPage)
