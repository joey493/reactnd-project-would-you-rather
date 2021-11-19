import React, { Component } from 'react'
import { connect } from 'react-redux';
import './Leaderboard.scss';

class LeaderBoard extends Component {
    render() {

        const { leaders } = this.props

        return (
            <div className='leader-board'>
                <div className="container">
                    {leaders.map(({ id, avatarURL, name, answers, questions }) => (

                        <div key={id} className='leader'>
                            <img
                                src={require(`../../utils/icons/${avatarURL}`).default} // what is require()
                                alt={id} />
                            <div className='content'>
                                <h3 className="user">{name}</h3>
                                <p>Answered Questions <span>{Object.keys(answers).length}</span></p>
                                <p>Created Questions <span>{questions.length}</span></p>
                            </div>
                            <div className="score">
                                <h3>Score</h3>
                                <p>{Object.keys(answers).length + questions.length}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ users }) => {
    const usersVal = Object.values(users)

    return {
        leaders: usersVal.sort((a, b) => {
            let score1 = Object.keys(a.answers).length + a.questions.length
            let score2 = Object.keys(b.answers).length + b.questions.length

            return score2 - score1
        }),
    }
}

export default connect(mapStateToProps)(LeaderBoard)