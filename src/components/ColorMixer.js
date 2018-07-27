import { mix } from 'ryb-color-mixer'
import React from 'react'

const ColorMixer = ({ colors }) => {
  const selected = colors.filter(color => color.selected).map(color => color.value)
  const backgroundColor = selected.length ? `#${mix(selected)}` : ''
  return (
    <section style={{ height: '20vh', backgroundColor }} className="border rounded"></section>
  )
}

export default ColorMixer
