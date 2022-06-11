import React from 'react'

import './Specialcompo1.css'

export default function SpecialCompo1() { const date = new Date() 
  const week=['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]
  return (
    <div className='spe_compo1'>
             <p> <button> { date.getMonth() + ' ' + date.getDate() + ', '+ date.getFullYear()} </button> <button> {  date.getMonth() + ' ' + date.getDate() + ', '+ date.getFullYear() } </button> </p>
             <div>  </div>
             <div>  </div>
    </div>
  )
}
