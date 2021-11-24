import { GET_QUSTIONS,
        SAVE_ANSWER, 
        SAVE_QUESTION } from '../action/questions'

const question = (state = {}, action) => {
    switch(action.type) {
        case GET_QUSTIONS:
            return {
                ...state,
                ...action.questions,
            }
        case SAVE_ANSWER: 
            const {qid, answer, authedUser} = action
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        votes: state[qid][answer].votes.concat(authedUser),
                        ...state[qid][answer]
                    }
                }
            }
        case SAVE_QUESTION:
            return {
                [action.question.id]: action.question,
                ...state,
            }
        default:
            return state
    }
}

export default question