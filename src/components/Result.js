import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Result extends Component {

    render() {
        const { question, author, authedUser, id } = this.props

        if(question === null) {
            return <p>This question does not exist</p>
        }

        const {
            optionOne, optionTwo
        } = question

        const optionOneVotes = optionOne.votes.length
        const optionTwoVotes = optionTwo.votes.length

        const votes = optionOneVotes + optionTwoVotes
        
        const optionOnePercent = votes !== 0 ? parseInt((optionOneVotes / votes) * 100, 10) : 0
        const optionTwoPercent = votes !== 0 ? parseInt((optionTwoVotes / votes) * 100, 10) : 0

        const optionOneChosen = optionOne.votes.includes(authedUser)
        const optionTwoChosen = optionTwo.votes.includes(authedUser)

        return (
            <Link className="question" to={`/questions/${id}`}>
                <h3 className='center'>Results</h3>
                <div className='question-info'>
                    <div className='author-info'>
                        <img 
                        src={author.avatarURL}
                        alt={`Avatar of ${author.name}`}
                        className='avatar'/>
                        <p>Asked by {author.name}</p>
                    </div>
                    <div className='question-options'>
                        <div className={`result 
                                ${optionOneChosen ? 'selected-result' : null}
                                ${optionOneVotes >= optionTwoVotes ? 'winner' : null}`}>
                            <p className='center'>{optionOne.text}</p>
                            <p className='center'>{optionOneVotes} out of {votes} votes - {optionOnePercent}%</p>
                            <p className='center'>{optionOneChosen && 'Your Answer'}</p>
                        </div>
                
                        <div className={`result 
                                ${optionTwoChosen ? 'selected-result' : null}
                                ${optionOneVotes <= optionTwoVotes ? 'winner' : null}`}>
                            <p className='center'>{optionTwo.text}</p>
                            <p className='center'>{optionTwoVotes} out of {votes} votes - {optionTwoPercent}%</p>
                            <p className='center'>{optionTwoChosen && 'Your Answer'}</p>
                        </div>
                        
                    </div>
                </div>
            </Link>
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

export default connect(mapStateToProps)(Result)