import {
    _getUsers,
    _getQuestions,
} from '../../utils/_DATA'

//actions 
import { getUsers } from './users'
import { getQuestions } from './questions'


const getInitialData = () => (
    Promise.all([
        _getUsers(),
        _getQuestions()
    ]).then(([users, questions]) => ({
        users,
        questions
    }))
)

//thunk pattern
const handleInitialData = () => (dispatch) => (
    getInitialData()
    .then(({ users, questions }) => {
        dispatch(getUsers(users))
        dispatch(getQuestions(questions))
    })
)

export default handleInitialData;