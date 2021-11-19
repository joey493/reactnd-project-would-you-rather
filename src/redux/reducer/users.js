import { GET_USERS } from '../action/users';

const users = (state = {}, action) => {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default users