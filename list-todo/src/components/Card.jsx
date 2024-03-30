const Card = ({ children, className }) => {
  return (
    <div className={`${className} border-gray-400 shadow-lg`}>
      { children }
    </div>
  )
}

export default Card;