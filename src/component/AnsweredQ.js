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
            <main className='question'>
                <header className='user'>
                    <img
                        src={user.avatarURL}
                        alt={user.id} />
                    <h3 className='userName'>{user.name}</h3>
                </header>
                <div className="content">
                    <h5 className='text-center py-6'>Would You Rather...</h5>
                    <div className="options">
                        <p>{question.optionOne.text} | {optionOneVotes} | {votesOnePerc}%</p><br />
                        <p>{question.optionTwo.text} | {optionTwoVotes} | {votesTwoPerc}%</p>
                    </div>
                </div>
            </main>
        )
    }
}

export default AnsweredQ
