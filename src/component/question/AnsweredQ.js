import React, { Component } from 'react'

export class AnsweredQ extends Component {
    render() {
        const { question, user } = this.props

        let optionOneVotes = question.optionOne.votes.length
        let optionTwoVotes = question.optionTwo.votes.length
        let votes = optionOneVotes + optionTwoVotes || 1;

        let votesOnePerc = Math.round((optionOneVotes / votes) * 100)
        let votesTwoPerc = 100 - votesOnePerc;
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
                        <p>{question.optionOne.text} | {optionOneVotes} | {votesOnePerc}%</p><br />
                        <p>{question.optionTwo.text} | {optionTwoVotes} | {votesTwoPerc}%</p>
                    </div>
                </div>
            </>
        )
    }
}

export default AnsweredQ
