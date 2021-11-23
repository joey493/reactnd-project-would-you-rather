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
