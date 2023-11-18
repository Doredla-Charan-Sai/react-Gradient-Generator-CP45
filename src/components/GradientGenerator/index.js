import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientDiv,
  Heading,
  Para,
  DirectionsList,
  ColorIpDiv,
  ColorDiv,
  Input,
  Button,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color1Txt: '#8ae323',
    color2: '#014f7b',
    color2Txt: '#014f7b',
    activeDirectionId: gradientDirectionsList[0].value,
    updatedDirection: gradientDirectionsList[0].value,
  }

  onChangeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  generate = () => {
    const {color1, color2, activeDirectionId} = this.state
    this.setState({
      color1Txt: color1,
      color2Txt: color2,
      updatedDirection: activeDirectionId,
    })
  }

  activeDirection = uniqueId => {
    this.setState({activeDirectionId: uniqueId})
  }

  render() {
    const {
      color1,
      color2,
      activeDirectionId,
      color1Txt,
      color2Txt,
      updatedDirection,
    } = this.state
    console.log(`to ${updatedDirection},${color1Txt},${color2Txt}`)
    return (
      <GradientDiv
        data-testid="gradientGenerator"
        direction={`to ${updatedDirection},${color1Txt},${color2Txt}`}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>
        <DirectionsList>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              key={eachDirection.directionId}
              active={activeDirectionId}
              onSelect={this.activeDirection}
              details={eachDirection}
            />
          ))}
        </DirectionsList>
        <Para>Pick the Colors</Para>
        <ColorIpDiv>
          <ColorDiv>
            <Para>{color1}</Para>
            <Input type="color" value={color1} onChange={this.onChangeColor1} />
          </ColorDiv>
          <ColorDiv>
            <Para>{color2}</Para>
            <Input type="color" value={color2} onChange={this.onChangeColor2} />
          </ColorDiv>
        </ColorIpDiv>
        <Button type="button" onClick={this.generate}>
          Generate
        </Button>
      </GradientDiv>
    )
  }
}
export default GradientGenerator
