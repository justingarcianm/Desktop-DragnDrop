import { BiRadioCircleMarked } from 'react-icons/bi'

const Modal = ({ modalObj, updateActivemodals, activeModals,updateModalInfo }) => {
    // @param( none ) return { remove modal from state that is closed }
    const closeModal = () => {
        const removeModal = activeModals.filter( single => single !== modalObj )
        updateActivemodals( removeModal )
        updateModalInfo( removeModal )
    }
    
    const { Content } = modalObj 
    return (
        <div className="modal draggable">
            <div className="close">
                <span onClick={closeModal} >
                    <BiRadioCircleMarked />
                    </span>
            </div>
            <div className="content">
            <Content />  
            </div>
        </div>
    )
}

export default Modal