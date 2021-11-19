import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export class Question extends Component {
    render() {
        const { question, user, id } = this.props
        return (
            <div className='question'>
                <div className='user'>
                    <img
                        src={require(`../../utils/icons/${user.avatarURL}`).default}
                        alt={user.id} />
                    <span className='userName'>{user.name}</span>
                </div>

                <div className="content">
                    <p>Would You Rather...</p>
                    <div className="options" onChange={this.handleChange}>
                        <span>{question.optionOne.text}</span><br />
                        <span>{question.optionTwo.text}</span>
                    </div>
                    <Link className='go-to' to={`/questions/${id}`}>Go to question</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ questions, users, currentUser }, { id }) => {
    const question = questions[id]

    return {
        question,
        user: users[question.author],
        currentUser
    }
}

export default connect(mapStateToProps)(Question)
