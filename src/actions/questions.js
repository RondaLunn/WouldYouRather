import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { handleUserQuestion, handleUserAnswer } from '../actions/users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

function addQuestionAnswer (user, qid, answer) {
    return {
        type: ADD_QUESTION_ANSWER,
        user,
        qid,
        answer
    }
}

export function handleAddQuestion (optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading())
        return saveQuestion({
            optionOneText, 
            optionTwoText,
            author: authedUser
        })
        .then(question => {
            dispatch(addQuestion(question))
            dispatch(handleUserQuestion(question.id))
        })
        .then(() => {
            dispatch(hideLoading())
        })
        .catch(() => {
            alert('There was an error saving your question. Please try again.')
        })
    }
}

export function handleAnswerQuestion (qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading())
        return saveQuestionAnswer({
            authedUser, 
            qid,
            answer
        })
        .then(() => {
            dispatch(addQuestionAnswer(authedUser, qid, answer))
            dispatch(handleUserAnswer(qid, answer))
        })
        .then(() => {
            dispatch(hideLoading())
        })
        .catch(() => {
            alert('There was an error saving your answer. Please try again.')
        })
    }
}