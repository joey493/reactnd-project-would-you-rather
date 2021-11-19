import { CURRENT_USER, LOG_OUT } from '../action/currentUser'

const currentUser = (state = null, action) => {
    switch(action.type) {
        case CURRENT_USER:
            return action.payload
        case LOG_OUT:
            return action.payload
        default:
            return state
    }
}

export default currentUser