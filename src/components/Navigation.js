import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className='nav center'>
            <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/new'>New Question</Link></li>
            <li><Link to='/leader'>Leaderboard</Link></li>
            </ul>
            
        </nav>
    )
}

export default Navigation