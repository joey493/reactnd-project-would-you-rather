import { combineReducers } from "redux"
import users from './users'
import questions from './questions'
import currentUser from './currentUser'

export const root = combineReducers({
        users,
        questions,
        currentUser
}) 