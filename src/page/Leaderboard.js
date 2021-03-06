import React, { Component } from 'react'
import { connect } from 'react-redux';

class LeaderBoard extends Component {
    render() {

        const { leaders } = this.props

        return (
            <div className='main p-4'>
                    {leaders.map(({ id, avatarURL, name, answers, questions }) => (
                        <div key={id} className='flex flex-col md:flex-row my-6 gap-x-12 p-6 justify-center items-center set-border'>
                            <img className='w-32 h-32 rounded-full'
                                src={avatarURL}
                                alt={id} />
                            <div className='flex-1 flex justify-between md:gap:0 gap-16 items-center'>
                                <div>
                                    <h3 className="text-main-color">{name}</h3>
                                    <p>Answered Questions: <span className="text-main-color">{Object.keys(answers).length}</span></p>
                                    <p>Created Questions: <span className="text-main-color">{questions.length}</span></p>
                                </div>
                                <div className="score">
                                    <h3>Score</h3>
                                    <p class='text-center text-main-color'>{Object.keys(answers).length + questions.length}</p>
                                </div>
                            </div>
                        </div>
                    ))}
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