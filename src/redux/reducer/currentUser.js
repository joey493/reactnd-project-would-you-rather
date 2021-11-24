import { CURRENT_USER, LOG_OUT } from '../action/currentUser'
import { SAVE_QUESTION, SAVE_ANSWER } from '../action/questions'

const currentUser = (state = null, action) => {
    switch(action.type) {
        case CURRENT_USER:
            return action.payload
        case LOG_OUT:
            return action.payload
        case SAVE_ANSWER:
            const { qid, answer } = action
            return {
                ...state,
                answers: {...state.answers, [qid]: answer}
            }
        case SAVE_QUESTION:
            return {
                ...state,
                questions: [...state.questions, action.question.id]
            }
        default:
            return state
    }
}

export default currentUser