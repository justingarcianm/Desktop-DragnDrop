const Folder = ({ data,updateActivemodals,updateModalInfo,modalInfo,checkState }) => {

    // @param ( icon doubleclicked ) return { added modal }
    const modalFn = () => {
            if(!checkState(modalInfo,data)){
                updateModalInfo( prev => [...prev,data] )
                return updateActivemodals( prev => [...prev,data] )
            }
    }
    const { img,name } = data
    
    return (
        <div className="draggable" onDoubleClick={() => modalFn()}>
            <img src={img} alt={name} />
            <p>{name}</p>
        </div>
    )
}

export default Folder