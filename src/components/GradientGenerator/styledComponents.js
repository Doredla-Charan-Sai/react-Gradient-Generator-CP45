// Style your elements here
import styled from 'styled-components'

export const GradientDiv = styled.div`
  background-image: linear-gradient(${props => props.direction});
  //   background-image: linear-gradient(to top, red, blue);
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  height: 100vh;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: white;
  font-weight: bold;
`
export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #ededed;
`
export const DirectionsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0px;
  list-style-type: none;
  width: 450px;
  margin: 30px;
`
export const ColorIpDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;
  align-items: center;
`
export const ColorDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Input = styled.input`
  width: 130px;
  height: 36px;
  border: none;
  cursor: pointer;
  outline: none;
`
export const Button = styled.button`
  color: #000000;
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  height: 32px;
  padding: 5px;
  background-color: #00c9b7;
  cursor: pointer;
  outline: none;
  margin-top: 30px;
`
