export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_USER_QUESTION = 'SAVE_USER_QUESTION'

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

function saveUserQuestion (user, questionId) {
    return {
        type: SAVE_USER_QUESTION,
        user,
        questionId
    }
}

export function handleUserQuestion (id) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(saveUserQuestion(authedUser, id))
    }
}