import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export class Question extends Component {
    render() {
        const { question, user, id } = this.props
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
