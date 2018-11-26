import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'
import './styles.css'

const Chart = ({ data, units, color }) => {
  const min = Math.round(Math.min(...data))
  const max = Math.round(Math.max(...data))
  const average = data => {
    const avg = data.reduce( (sum, n) => sum+n, 0) / data.length
    return Math.round(avg * 100) / 100
  }

  return (
    <div className='chart'>
      <span className='min'>{ min }</span>
      <span className='max'>{ max }</span>
      <Sparklines data={ data }>
        <SparklinesLine color={ color } />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <label>Average: </label><div style={{ color }}>{ average(data) } { units }</div>
    </div>
  )
}

export default Chart