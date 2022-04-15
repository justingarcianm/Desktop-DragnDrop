import interact from 'interactjs'

const interactDrag = () => {
    return interact('.draggable').draggable({
        modifiers: [
            interact.modifiers.restrictRect({
                restriction:'parent',
                endOnly:true
            }),
        ],
        listeners:{
            move:dragMoveListener,
            end (event) {
                event.target.style.opacity = `1`
            }
        }
    })
}

const dragMoveListener = event => {
    const target = event.target
    let x = (parseFloat(target.getAttribute('data-x')) || 0 ) + event.dx
    let y = (parseFloat(target.getAttribute('data-y')) || 0 ) + event.dy

    target.style.transform = `translate(${x}px,${y}px)`
    target.style.opacity = `.5`
    target.setAttribute('data-x',x)
    target.setAttribute('data-y',y)
}

export default interactDrag