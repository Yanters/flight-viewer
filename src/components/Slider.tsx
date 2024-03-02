import React from 'react'
import { useAppDispatch, useAppSelector } from '../store/store'
import { setTimestamp } from '../store/features/flightSlice'
import styled from 'styled-components'

const SliderElement = styled.input`
  width: 80%;
  -webkit-appearance: none;
  height: 10px;
  border-radius: 15px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #6857ff;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`

const Slider = () => {
  const { flight, timestamp } = useAppSelector((state) => state.flight)
  const dispatch = useAppDispatch()

  const timestamps = flight!.route.map((point) => point.timestamp)
  const indexForTimestamp = timestamps.indexOf(timestamp)

  const handleSliderChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const index = parseInt(e.target.value, 10)
    const newTimestamp = timestamps[index]
    dispatch(setTimestamp(newTimestamp))
  }
  return (
    <SliderElement
      id='slider'
      type='range'
      min={0}
      step={1}
      max={timestamps.length - 1}
      value={indexForTimestamp >= 0 ? indexForTimestamp : 0}
      onChange={handleSliderChange}
    />
  )
}

export default Slider
