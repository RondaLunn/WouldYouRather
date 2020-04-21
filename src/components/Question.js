import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {


    handleAnswer = (e) => {
        e.preventDefault()
        // Handle like tweet
    }

    render() {
        const { question, author } = this.props

        if(question === null) {
            return <p>This question does not exist</p>
        }

        const {
            optionOne, optionTwo
        } = question

        return (
            <div className="question">
                <h3 className='center'>Would You Rather...</h3>
                <div className='question-info'>
                    <div className='author-info'>
                        <img 
                        src={author.avatarURL}
                        alt={`Avatar of ${author.name}`}
                        className='avatar'/>
                        <p>Asked by {author.name}</p>
                    </div>
                    <div className='question-options'>
                        <button className='btn'>{optionOne.text}?</button>
                        <p>OR</p>
                        <button className='btn'>{optionTwo.text}?</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({authedUser, questions, users}, {id}) {
    const question = questions[id]
    const author = users[question.author]

    return{
        authedUser,
        question: question,
        author: author
    }

}

export default connect(mapStateToProps)(Question)