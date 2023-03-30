import React from 'react'
import './Alert.css'
import vector from './Vector.png'

const Alert = ({text}) => {
  
  return (
    <div className='alert'>{text==="" ?  <p><b>Try it free 7 days</b> then ₹180/mo. thereafter</p> : <p>{text} <img src={vector} /></p> }</div>
  )
}

export default Alert