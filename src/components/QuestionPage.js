import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import Result from './Result'

class QuestionPage extends Component {
    render() {
        const { question_id, answerIds } = this.props
        const answered = answerIds.includes(question_id)

        return(
            <div>
                {answered
                ? <Result id={question_id} />
                : <Question id={question_id} />
            }
            </div>
        )
    }
}

function mapStateToProps ({ authedUser, users }, props) {
    const { question_id } = props.match.params
    const user = users[authedUser]

    return {
        question_id, 
        answerIds: Object.keys(user.answers),
    }
}

export default connect(mapStateToProps)(QuestionPage)