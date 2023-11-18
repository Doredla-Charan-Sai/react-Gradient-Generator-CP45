// Style your elements here
import styled from 'styled-components'

export const NormalButton = styled.button`
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  background-color: ${props => (props.isActive ? 'white' : null)};
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 28px;
  padding: 5px;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: bold;
  color: #000000;
`
