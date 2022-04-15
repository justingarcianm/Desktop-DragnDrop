import { useState } from 'react'
import Data from '../../data'
import Folder from '../Folder/Folder'
import instanceDrag from "../../Helpers/instance"
import Modal from '../Modal/Modal'

const Desktop = ({modalInfo, updateModalInfo, checkState}) => {
    const [ modalContent, setModalContent ] = useState([])
    instanceDrag()
    console.log( 'desktop: ', modalContent )
    return (
        <div className="container">
                { Data.map( (item,idx) => {
                    return <Folder 
                            key={idx} 
                            data={item}
                            updateActivemodals={setModalContent}
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
                            updateActivemodals={setModalContent}
                            updateModalInfo={updateModalInfo}
                            checkState={checkState}
                            />
                } )}
        </div>
    )
}

export default Desktop