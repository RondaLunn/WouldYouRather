import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Navigation extends Component {
    handleLogOut = (e) => {
        e.preventDefault()
        const { dispatch } = this.props

        dispatch(setAuthedUser(null))
    }

    render(){
    const { authedUser } = this.props
    return (
        <nav className='nav center'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/add'>New Question</Link></li>
                <li><Link to='/leaderboard'>Leaderboard</Link></li>
            </ul>
            {authedUser &&(
            <div className="authedUser-info">
                <div>Logged in as {authedUser} </div>
                <button onClick={this.handleLogOut}>Log out</button>
            </div>
            )}
        </nav>
    )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(Navigation)