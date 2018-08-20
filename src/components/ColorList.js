import React from 'react'

// onClick={ () => selectColor(i) } rather than:
// onClick={ selectColor(i) } b/c it takes a fn, not an invoked fn
const ColorList = ({ colors, selectColor }) => {
  const lis = colors.map((color, i) => {
    const style = { backgroundColor: color.selected ? color.value : 'white' }
    return <li
      onClick={ () => selectColor(i) }
      className="list-group-item text-dark"
      key={ i }
      style={ style }>{ color.name }</li>
  })

  return <ul className="list-group">{ lis }</ul>
}

export default ColorList
