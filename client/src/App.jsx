import { useState } from 'react'
import checkState from './Helpers/checkState'
import Desktop from './components/Desktop/Desktop'
import Nav from './components/Nav/Nav'

import './styles.css'

const App = () => {
    const [ state,setState ] = useState([])
    console.log('App ', state)
    return(
        <>
        <Nav modalInfo={state} updateModalInfo={setState} checkState={checkState}/>
        <Desktop modalInfo={state} updateModalInfo={setState} checkState={checkState}/>
        </>
    )
}
export default App