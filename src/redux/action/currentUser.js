export const CURRENT_USER = 'CURRENT_USER'
export const LOG_OUT = 'LOG_OUT'

export const setCurrentUser = (user) => ({
    type: CURRENT_USER,
    payload: user
})

export const LogOut = () => ({
    type: LOG_OUT,
    payload: null
})