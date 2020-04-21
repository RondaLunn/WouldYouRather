import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Home from './Home'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'
import Navigation from './Navigation'
import Login from './Login'

class App extends Component { 
  componentDidMount() {      
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }

  render () {
  return (
    <BrowserRouter>
    <Fragment>
      <LoadingBar />
      <div className="container">
        <Navigation />
        
        {this.props.loading 
        ? <Login />
        : <Fragment>
          <Route exact path='/' render ={() => (
            <div>{this.props.loading === true 
              ? null
              : <Home />}
              </div>
          )} />

        <Route path='/leader' render ={() => (
            <div>{this.props.loading === true 
              ? null
              : <LeaderBoard />}
              </div>
          )} /> 

        <Route path='/new' render ={() => (
            <div>{this.props.loading === true 
              ? null
              : <NewQuestion />}
              </div>
          )} /> 

        <Route path='/questions/:question_id' component={QuestionPage}/>
        </Fragment>
            }
      </div>
      </Fragment>
    </BrowserRouter>
  );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
