export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_USER_QUESTION = 'SAVE_USER_QUESTION'
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER'

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

function saveUserQuestion (author, questionId) {
    return {
        type: SAVE_USER_QUESTION,
        author,
        questionId
    }
}

function saveUserAnswer (user, qid, answer) {
    return {
        type: SAVE_USER_ANSWER,
        user,
        qid,
        answer
    }
}

export function handleUserQuestion (id) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(saveUserQuestion(authedUser, id))
    }
}

export function handleUserAnswer (qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(saveUserAnswer(authedUser, qid, answer))
    }
}