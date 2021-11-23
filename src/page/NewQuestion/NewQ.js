import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../../redux/action/questions'
import { Redirect } from 'react-router-dom'
// Navigate
export class NewQ extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
        toHome: false
    }

    handleOptionOne = (e) => this.setState({ optionOneText: e.target.value })
    handleOptionTwo = (e) => this.setState({ optionTwoText: e.target.value })

    handleSubmit = () => {
        const { optionOneText, optionTwoText } = this.state
        const { dispatch, currentUser } = this.props

        dispatch(handleSaveQuestion({ optionOneText, optionTwoText, author: currentUser }))

        this.setState({
            toHome: true
        })
    }

    render() {
        const { optionOneText, optionTwoText, toHome } = this.state

        if (toHome === true) {
            return <Redirect to='/home' />
        }

        return (
            <div className='question'>
                <div className='user'>
                    <span className='avatar'></span>
                    <span className='userName'>userName</span>
                </div>
                <div className='content'>
                    <p>Would You Rather...</p>
                    {/* options */}
                    <input className='option' placeholder='Option 1' onChange={this.handleOptionOne} />
                    <p>Or</p>
                    <input className='option' placeholder='Option 2' onChange={this.handleOptionTwo} />
                    <button onClick={this.handleSubmit} disabled={optionOneText === '' || optionTwoText === ''}>Submit</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ currentUser },) => ({ currentUser })

export default connect(mapStateToProps)(NewQ)
