import React, { Component } from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

const Chart = ({ data, units, color }) => {

  const average = data => {
    const avg = data.reduce( (sum, n) => sum+n, 0) / data.length
    return Math.round(avg * 100) / 100
  }

  return (
    <div>
      <Sparklines data={ data }>
        <SparklinesLine color={ color } />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <label>Average: </label><div style={{ color }}>{ average(data) } { units }</div>
    </div>
  )
}

export default Chart