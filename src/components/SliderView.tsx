import styled from 'styled-components'
import Slider from './Slider'

const SliderContainer = styled.div`
  height: 160px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const Label = styled.label`
  font-size: 24px;
  color: #ffffff;
`

const SliderView = () => {
  console.log('Rendering SliderView')
  return (
    <SliderContainer>
      <Label htmlFor='slider'>Plane timestamp</Label>
      <Slider />
    </SliderContainer>
  )
}

export default SliderView
