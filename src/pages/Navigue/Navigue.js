import React from 'react'

import './Navigue.css'

import {BiBed} from 'react-icons/bi'
import {AiFillHome} from 'react-icons/ai'
import {AiFillShop} from 'react-icons/ai'
import {AiOutlineHome} from 'react-icons/ai'
import {AiFillCaretLeft} from 'react-icons/ai'
import {AiFillCaretRight} from 'react-icons/ai'
import {BsApple} from 'react-icons/bs'
import {BsFillHeptagonFill} from 'react-icons/bs'
import {BsFillPieChartFill} from 'react-icons/bs'
import {BsFillPrinterFill} from 'react-icons/bs'
import {BsFillStarFill} from 'react-icons/bs'
import {BsBell} from 'react-icons/bs'
import {BsBootstrapReboot} from 'react-icons/bs'


export default function Navigue() {    const span_marsk=true
  return (
    <div className='navigue'>
           <div className='navig_gauch'> 
                      <div> <span> CL </span> <div> <p>Codinglab</p> <p>Web developper</p> </div>    <button onClick={ handleClick } style={{ textAlign : 'center', padding : ' 5px 10px', backgroundColor : 'blue', borderRadius : '20px/20px'  }} > > </button> </div>
                      
                      <ul>
                           <li> <BsBootstrapReboot /> <span> <input type="search" placeholder='SEARCH ...' size='20' style={{ padding : '5px' }} /> </span> </li>
                           <li> <AiFillHome /> <span> DashBoard </span> </li>
                           <li> <AiFillShop /> <span> Revenue </span> </li>
                           <li> <AiOutlineHome /> <span> DashBoard </span> </li>
                           <li> <BsApple /> <span> Iphone </span> </li>
                           <li> <BsFillHeptagonFill /> <span> Heptagone </span> </li>
                           <li> <BsFillPieChartFill /> <span> Secteur Circulaire </span> </li>
                           <li> <BsFillStarFill /> <span> Concour Star </span> </li>
                           <li> <BsFillPrinterFill /> <span> Imprimante </span> </li>
                           <li> <BsBell /> <span> Notification </span> </li>
                           <li> <span className='span1'> <span>  </span> <span>  </span>  </span></li>
                      </ul>
           </div>
           <div className='navig_droit'>  </div>
    </div>
  )
}

const handleClick =(e)=>{ 
  const span_in_li=document.querySelectorAll('ul li span')
  const p_in_div=document.querySelector('.navig_gauch div:first-child div')   
  const li = document.querySelectorAll(' .navig_gauch li ')
  const val_bouton =  e.target.textContent
  
  if (val_bouton===' > ') {
    li.forEach( li_elt=>{ li_elt.style.textAlign='justify' } )
    p_in_div.style.display='inline'
    span_in_li.forEach( span => {span.style.display='inline'} ) 
    e.target.textContent=' < '
  } else {
    p_in_div.style.display='none'
    span_in_li.forEach( span => {span.style.display='none'} ) 
    li.forEach( li_elt=>{ li_elt.style.textAlign='center' } )
    e.target.textContent=' > '
  } 
             console.log('bonjoour')
}