import CloseIcon from './CloseIcon'
import ModalAction from './ModalAction'
import ModalContent from './ModalContent'
import ModalActions from './ModalActions'

import '../modal/Modal.css'

function Modal({ title, children, actions, onClose}) {

  return (
    <div className="modal_container">
      <div className="modal">
        <CloseIcon handleClick={onClose}/>
        <h1>{title}</h1>
        <ModalContent>
          {children}
        </ModalContent>
        <ModalActions>
          {actions.map((action, index) => (
            <ModalAction
              key={index}
              color={action.color}
              handleClick={action.handleClick}         
            >
              {action.text}
            </ModalAction>
          ))}
        </ModalActions>
      </div>
    </div>
  )
}

export default Modal