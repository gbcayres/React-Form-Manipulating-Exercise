function CloseIcon({ handleClick }) {
  return (
        <div className="close_container">
            <span onClick={handleClick}>&times;</span>
        </div>
  )
}

export default CloseIcon