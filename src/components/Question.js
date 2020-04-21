import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { handleAnswerQuestion } from '../actions/questions'

class Question extends Component {


    handleAnswer = (e) => {
        e.preventDefault()
        const answer = e.target.name
        const { dispatch } = this.props

        dispatch(handleAnswerQuestion(this.props.id, answer))

        this.props.history.push(`/questions/${this.props.id}`)
    }

    render() {
        const { question, author, id } = this.props

        if (question === null) {
            return <p className='center'>Error 404: This question does not exist</p>
        }

        const {
            optionOne, optionTwo
        } = question

        return (
            <Link className="question" to={`/questions/${id}`}>
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
                        <button className='btn' name='optionOne' onClick={this.handleAnswer}>{optionOne.text}?</button>
                        <p>OR</p>
                        <button className='btn' name='optionTwo' onClick={this.handleAnswer}>{optionTwo.text}?</button>
                    </div>
                </div>
            </Link>
        )
    }
}

function mapStateToProps ({authedUser, questions, users}, {id}) {
    const question = questions[id] ? questions[id] : null
    const author = question ? users[question.author] : null

    return {
        authedUser,
        question: question,
        author: author
    }

}

export default withRouter(connect(mapStateToProps)(Question))