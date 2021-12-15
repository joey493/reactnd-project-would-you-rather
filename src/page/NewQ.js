import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../redux/action/questions'
import { Redirect } from 'react-router-dom'

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

        dispatch(handleSaveQuestion({ optionOneText, optionTwoText, author: currentUser.id }))

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
            <div className='main p-8 flex flex-col items-center'>
                <h2 className='font-bold text-lg mb-8'>Would You Rather...</h2>
                {/* options */}
                <input className='set-border w-full px-4 py-2' placeholder='Option 1' onChange={this.handleOptionOne} />
                <p className='font-bold text-lg my-6'>Or</p>
                <input className='set-border w-full px-4 py-2' placeholder='Option 2' onChange={this.handleOptionTwo} />
                <button className='mt-6 mx-auto btn' onClick={this.handleSubmit} disabled={optionOneText === '' || optionTwoText === ''}>Submit</button>
            </div>
        )
    }
}

const mapStateToProps = ({ currentUser },) => ({ currentUser })

export default connect(mapStateToProps)(NewQ)
