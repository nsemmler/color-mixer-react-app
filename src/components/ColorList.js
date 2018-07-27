import React from 'react'

const ColorList = ({ colors }) => {
  const lis = colors.map(color => {
    const style = { 'background-color': color.value }
    return <li className="list-group-item text-white" style={ style }>{ color.name }</li>
  })

  return <ul className="list-group">
    { lis }
  </ul>
}

export default ColorList
