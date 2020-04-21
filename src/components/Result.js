import React, { Component } from 'react'
import { connect } from 'react-redux'

class Result extends Component {

    render() {
        const { question, author } = this.props

        if(question === null) {
            return <p>This question does not exist</p>
        }

        const {
            optionOne, optionTwo
        } = question

        const optionOneVotes = optionOne.votes.length
        const optionTwoVotes = optionTwo.votes.length

        const votes = optionOneVotes + optionTwoVotes
        

        return (
            <div className="question">
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
                        <div className={`result ${optionOneVotes >= optionTwoVotes ? 'winner' : null}`}>
                            <p className='center'>{optionOne.text}</p>
                            <p className='center'>{optionOneVotes} out of {votes} votes</p>
                        </div>
                
                        <div className={`result ${optionOneVotes <= optionTwoVotes ? 'winner' : null}`}>
                            <p className='center'>{optionTwo.text}</p>
                            <p className='center'>{optionTwoVotes} out of {votes} votes</p>
                        </div>
                        
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

export default connect(mapStateToProps)(Result)