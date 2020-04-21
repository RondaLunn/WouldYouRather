import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { withRouter } from 'react-router-dom'

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: ''
    }

    handleChange = e => {
        const name = e.target.name
        const text = e.target.value

        this.setState(() => ({
            [name]: text
        }))
    }

    handleSubmit = e => {
        e.preventDefault()
        const { optionOne, optionTwo } = this.state
        const { dispatch } = this.props

        dispatch(handleAddQuestion(optionOne, optionTwo))

        this.setState(() => ({
            optionOne: '', 
            optionTwo: ''
        }))

        this.props.history.push('/')        
    }

    render() {
        const { optionOne, optionTwo } = this.state
        return (
            <div className="question">
                <h3 className='center'>Would You Rather...</h3>
                <div className='question-info'>
                    <form className='question-options' onSubmit={this.handleSubmit}>
                        <input 
                        name='optionOne'
                        className='question-option'
                        placeholder='Option 1' 
                        value={optionOne}
                        onChange={this.handleChange}/>
                        <p className='center'>OR</p>
                        
                        <input
                        name='optionTwo'
                        className='question-option'
                        placeholder='Option 2' 
                        value={optionTwo}
                        onChange={this.handleChange}/>

                        <button 
                        className='btn' 
                        disabled={optionOne === '' || optionTwo === ''}
                        >Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(connect()(NewQuestion))