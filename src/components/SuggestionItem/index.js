// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {newSuggestion, displayText} = props
  const {suggestion} = newSuggestion

  const onClickSearchInput = () => {
    displayText(suggestion)
  }

  return (
    <li className="each-suggestion">
      <p className="suggestion-text"> {suggestion} </p>
      <button
        type="button"
        className="arrow-button"
        onClick={onClickSearchInput}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-img"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
