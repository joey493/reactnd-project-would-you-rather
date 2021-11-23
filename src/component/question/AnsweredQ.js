import React, { Component } from 'react'

export class AnsweredQ extends Component {
    render() {
        const { question, user } = this.props

        const optionOneVotes = question.optionOne.votes.length
        const optionTwoVotes = question.optionTwo.votes.length
        const votes = optionOneVotes + optionTwoVotes;

        const votesOnePerc = ((optionOneVotes / votes) * 100)
        const votesTwoPerc = 100 - votesOnePerc;
        return (
            <>
                <div className='user'>
                    <img
                        src={require(`../../utils/icons/${user.avatarURL}`).default}
                        alt={user.id} />
                    <span className='userName'>{user.name}</span>
                </div>
                <div className="content">
                    <p>Would You Rather...</p>
                    <div className="options">
                        <p>{question.optionOne.text} || {optionOneVotes} || {votesOnePerc}%</p><br />
                        <p>{question.optionTwo.text} || {optionTwoVotes} || {votesTwoPerc}%</p>
                    </div>
                </div>
            </>
        )
    }
}

export default AnsweredQ
