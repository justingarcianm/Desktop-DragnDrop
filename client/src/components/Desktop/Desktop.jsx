import { useState } from 'react'
import Data from '../../data'
import Folder from '../Folder/Folder'
import interactDrag from "../../Helpers/interact"
import Modal from '../Modal/Modal'

const Desktop = ({modalInfo, updateModalInfo, checkState}) => {
    const [ modalContent, setModalContent ] = useState([])
    interactDrag()
    console.log( 'desktop: ', modalContent )
    return (
        <div className="container">
                { Data.map( (item,idx) => {
                    return <Folder 
                            key={idx} 
                            data={item}
                            updateActiveModals={setModalContent}
                            modalInfo={modalInfo}
                            updateModalInfo={updateModalInfo}
                            checkState={checkState}
                            />
                }) }

                { modalInfo.map( (modal,idx) => {
                    return <Modal 
                            modalObj={modal} 
                            key={idx}
                            activeModals={modalContent}
                            updateActiveModals={setModalContent}
                            updateModalInfo={updateModalInfo}
                            checkState={checkState}
                            />
                } )}
        </div>
    )
}

export default Desktop