function ModalAction({ children, color, handleClick}) {
  return (
    <button 
        className="action" 
        style={{backgroundColor: `${color}`}}
        onClick={handleClick}    
    >
        {children}
    </button>
  )
}

export default ModalAction