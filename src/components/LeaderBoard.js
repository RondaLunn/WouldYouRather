import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'

class LeaderBoard extends Component {
    render () {
        return (
            <div>
                <h3 className='center'>Leaderboard</h3>
                <ul className='dashboard-list'>
                    {this.props.userIds.map((id) => (
                        <li key={id}>
                            <User id={id}/>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps( { users } ){
    return { 
        userIds: Object.keys(users)
        .sort((a,b) => (Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length))
    }
  }

export default connect(mapStateToProps)(LeaderBoard)