import { getInitialData } from '../../utils/api'

//actions 
import { getUsers } from './users'
import { getQuestions } from './questions'

//thunk pattern
const handleInitialData = () => (dispatch) => (
    getInitialData()
    .then(({ users, questions }) => {
        dispatch(getUsers(users))
        dispatch(getQuestions(questions))
    })
)

export default handleInitialData;