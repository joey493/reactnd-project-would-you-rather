import { _saveQuestionAnswer, _saveQuestion } from '../../utils/_DATA'

export const GET_QUSTIONS = 'GET_QUSTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const SAVE_QUESTION = 'SAVE_QUESTION'


export const getQuestions = (questions) => ({
    type: GET_QUSTIONS,
    questions
})

const saveAnswer = ({ authedUser, qid, answer }) => ({
    type: SAVE_ANSWER,
    authedUser,
    qid,
    answer
})


export const saveQuestionAction = (question) => ({
    type: SAVE_QUESTION,
    question
})


export const handleSaveAnswer = ({ authedUser, qid, answer }) => ( // _saveQuestionAnswer ({ authedUser, qid, answer })
    (dispatch) => {
        _saveQuestionAnswer({ authedUser, qid, answer })
        .then(() => {
            dispatch(saveAnswer({ authedUser, qid, answer }))
        })
    }
)

export const handleSaveQuestion = (question) => ( // _saveQuestion (question) 
    (dispatch) => {
        _saveQuestion(question).then((_question) => {
            dispatch(saveQuestionAction(_question))
        })
    }
)