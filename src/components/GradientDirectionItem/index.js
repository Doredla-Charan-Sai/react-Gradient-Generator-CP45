// Write your code here
import {NormalButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {active, onSelect, details} = props
  const {value, displayText} = details
  const onTake = () => {
    onSelect(value)
  }
  return (
    <li>
      <NormalButton isActive={active === value} onClick={onTake}>
        {displayText}
      </NormalButton>
    </li>
  )
}

export default GradientDirectionItem
