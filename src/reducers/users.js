import { RECEIVE_USERS, SAVE_USER_QUESTION } from '../actions/users'

export default function users (state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state, 
                ...action.users
            }
        case SAVE_USER_QUESTION:
            const { user, id } = action
            return {
                ...state,
                [user]: {
                    ...state[user],
                    questions: state[user].questions.concat([id])
                  }
            }
        default:
            return state
    }
}