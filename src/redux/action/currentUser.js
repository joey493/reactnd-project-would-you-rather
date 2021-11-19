export const CURRENT_USER = 'CURRENT_USER'
export const LOG_OUT = 'LOG_OUT'

export const setCurrentUser = (id) => ({
    type: CURRENT_USER,
    payload: id
})

export const LogOut = () => ({
    type: LOG_OUT,
    payload: null
})