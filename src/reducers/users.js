import { RECEIVE_USERS, SAVE_USER_QUESTION, SAVE_USER_ANSWER } from '../actions/users'

export default function users (state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state, 
                ...action.users
            }
        case SAVE_USER_QUESTION:
            const { author, id } = action
            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: state[author].questions.concat([id])
                  }
            }
        case SAVE_USER_ANSWER:
            const { user, qid, answer } = action
            return {
                ...state,
                [user]: {
                    ...state[user],
                    answers: {
                        ...state[user].answers,
                        [qid]: answer
                    }
                }
            }
        default:
            return state
    }
}



///
// export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         users = {
//           ...users,
//           [authedUser]: {
//             ...users[authedUser],
//             answers: {
//               ...users[authedUser].answers,
//               [qid]: answer
//             }
//           }
//         }
  
//         questions = {
//           ...questions,
//           [qid]: {
//             ...questions[qid],
//             [answer]: {
//               ...questions[qid][answer],
//               votes: questions[qid][answer].votes.concat([authedUser])
//             }
//           }
//         }
  
//         res()
//       }, 500)
//     })
//   }