import React from 'react'
import './Footer.css'
import { secondryColor } from '../../config'

function Footer() {
  return (
    <div className="FooterMain">
    <h5 className="FMText">
      Copyright © Designed & Developed by{" "}
      <span style={{ color: secondryColor}}>Sang Solutions </span> 2024
    </h5>
  </div>
  )
}

export default Footer