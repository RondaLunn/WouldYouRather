import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {

    render() {
        const { user } = this.props

        if(user === null) {
            return <p>This user does not exist</p>
        }

        const {
            answers, questions
        } = user

        const answerScore = Object.keys(answers).length
        const questionScore = questions.length
        const score = answerScore + questionScore        

        return (
            <div className="user">
                <div className='user-info'>
                        <img 
                        src={user.avatarURL}
                        alt={`Avatar of ${user.name}`}
                        className='avatar'/>
                        
                        <h3 className='center'>{user.name}</h3>
                </div>

                <div className='scores'>
                    <div className='question-answer-scores'>
                        <div className={`score`}>
                            <p className='center'>Answered Questions: {answerScore}</p>
                        </div>
                
                        <div className={`score`}>
                            <p className='center'>Questions Asked: {questionScore}</p>
                        </div>
                    </div>

                    <div className={'total-score'}>
                        <div className={`score-total`}>
                            <p className='center'>Score: {score}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({users}, {id}) {
    const user = users[id]

    return {
        user
    }

}

export default connect(mapStateToProps)(User)