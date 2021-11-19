// redux middleware function pattern
const logger = (store) => (next) => (action) => {
    console.group(action.type)
        console.log('the action: ', action)
        const returnValue = next(action)
        console.log('the State: ', store.getState())
    console.groupEnd()
    return returnValue
}

export default logger