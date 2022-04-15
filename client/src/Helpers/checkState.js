// @params ( state from App component, state from current component ) returns { obj or false }

const checkState = (currentState,checkState) => {
    const checking = currentState.filter( singleCurrrent => singleCurrrent.name === checkState.name )[0]
    return checking || false
}  

export default checkState