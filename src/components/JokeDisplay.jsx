

const JokeDisplay = ({ joke, isLoading }) => {
  return (
    <div className="joke-container">
      <p>{ isLoading ? "Loading..." : joke }</p>
    </div>
  )
}

export default JokeDisplay; 