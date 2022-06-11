import React from 'react'

import {BiBed} from 'react-icons/bi'
import {DiDatabase} from 'react-icons/di'
import {FiUser} from 'react-icons/fi'
import SpecialCompo2 from '../Special/Special_compo2/SpecialCompo2'
import './Search.css'

export default function Search() { const dat = new Date()
 const [adult, setAdult] = React.useState(1);
 const [room, setRoom] = React.useState(0);
 const [child, setChild] = React.useState(0);

  return (<div>
    <div className='search'>
            <form>
                    <div style={{ borderRight : '5px solid rgb(230, 195, 18)', width : '30%', padding : '10px' }} > <BiBed /> <input type="text" style={{ fontSize : '1.3em', padding : '5px 10px' }} placeholder='where are you going ?' name='destination'  /> </div>
                    <div style={{  borderRight : '5px solid rgb(230, 195, 18)',  padding : '10px' }} > <DiDatabase /> Du <input type="date"  value={dat.toDateString()} /> Au <input type="date" /> </div>
                    <div style={{  borderRight : '5px solid rgb(230, 195, 18)',  padding : '10px' }} onClick={ ()=>{ console.log('jai clique') } } > <FiUser /> {adult} adult - {room} rooms - {child} children </div>
                    <button style={{ padding : '5px 10px', margin : 'auto', color : 'white', backgroundColor: 'blue', borderColor : 'none' }} onClick={makala}> Search </button>
                    
           </form>
           <div style={{ position : 'relative', left : '150px', top : '15px' }} > <input type="checkbox" /> <label> l'm travelling for work </label> </div>
    </div>
           <SpecialCompo2 /> <br/><br/><br/>
    </div>
  )
}

const makala =(e)=>{

}
