import {
    _getUsers,
    _getQuestions,
    _saveQuestionAnswer,
    _saveQuestion
} from './_DATA'

export const getInitialData = () => (
    Promise.all([
        _getUsers(),
        _getQuestions()
    ]).then(([users, questions]) => ({
        users,
        questions
    }))
)

// _saveQuestionAnswer ({ authedUser, qid, answer })
export const saveQuestionAnswer = (info) => _saveQuestionAnswer(info)


// _saveQuestion (question) 
export const saveQuestion = (question) => _saveQuestion (question) 