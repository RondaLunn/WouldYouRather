import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import Result from './Result'

class Home extends Component {
    state = {
        view: 'answered'
    }

    toggleView = () => {
        const view = this.state.view
        let newView = view === 'answered' ? 'unanswered' : 'answered'
        console.log(newView)
        this.setState(() => ({
            view: newView
        }))
    }

    render () {
        const { questionIds, answerIds } = this.props
        const answered = questionIds.filter(qid => answerIds.includes(qid))
        const unanswered = questionIds.filter(qid => !answerIds.includes(qid))
        const { view } = this.state
        return (
            <div className='dashboard'>
                <h3 className='center'>Questions</h3>
                <button className='btn' onClick={this.toggleView}>View {this.state.view}</button>
                <ul className='dashboard-list'>
                    {view === 'answered' 
                    ? unanswered.map((id) => (
                        <li key={id}>
                            <Question id={id} />
                        </li>
                    ))
                    : answered.map((id) => (
                        <li key={id}>
                            <Result id={id} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps( { authedUser, users, questions } ){
    const user = users[authedUser]
    return { 
        user,
        answerIds: Object.keys(user.answers),
        questionIds: Object.keys(questions) 
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
  }

export default connect(mapStateToProps)(Home)