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
 const [ville, setVille] = React.useState(' ')
 const [opacite, setOpacite] = React.useState(0);

 const makala =(e)=>{
          const  opacite1 = opacite===0 ? 1 : 0
            setOpacite(opacite1)    
 }

 const handle = (nomclass, valer)=>{
  if (nomclass==='adult') {
       setAdult(valer)
  } else if(nomclass==='room') {
      setRoom(valer)
  }else{
    setChild(valer)
  }
}

// let inp=document.querySelector('.desination')

  return (<div className='pachild' >
    <div className='search'>
            <form>
                    <div style={{ borderRight : '3px solid rgb(230, 195, 18)', width : '30%', padding : ' 13px 10px' }} > <BiBed /> <input type="text" style={{ fontSize : '1.1em', padding : '0px 10px' }} placeholder='where are you going ?' onChange={ (e) => setVille( e.target.value ) } value={ville} className='destination' required  /> </div>
                    <div style={{  borderRight : '3px solid rgb(230, 195, 18)',  padding : ' 13px 10px' }} > <DiDatabase /> Du <input type="date"  value={dat.toDateString()} /> Au <input type="date" /> </div>
                    <div style={{  borderRight : '3px solid rgb(230, 195, 18)',  padding : ' 13px 10px' }} onClick={ makala } > <FiUser /> {adult} adult - {room} rooms - {child} children </div>
                    <a href={'/hotels/' + adult + '/' + child + '/' + room + '/' + ville} style={{ color : 'white', backgroundColor : '#0071c2', width : '14.5%', padding : '13px 0', margin : '0' , textAlign : 'center' }} > Search </a>
                    
           </form>
           <div style={{ position : 'relative', left : '150px', top : '15px' }} > <input type="checkbox" /> <label> l'm travelling for work </label> </div>
    </div>
           <SpecialCompo2 opacite={opacite} changeEtat={handle} /> <br/><br/><br/>
    </div>
  )
}





