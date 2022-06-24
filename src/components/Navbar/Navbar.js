import React from 'react'

import './Navbar.css'

import france from "../../assets/drapeau/france.png";

import {FaBed} from 'react-icons/fa'
import {BiBed} from 'react-icons/bi'
import {AiOutlineCar} from 'react-icons/ai'
import {BiCar} from 'react-icons/bi'
import { IoMdAirplane } from "react-icons/io";

import { Link } from 'react-router-dom'
import SelectLangue from '../SelectLangue/SelectLangue';

export default function Navbar() {
   
  let visible_nation=false
  const devise_or_nation=(e)=>{
   // const lien_click=e.target.className
    if (!visible_nation) {
     
       document.querySelector('.pachild').style.opacity='0'
         document.body.style.backgroundColor='rgba(0,0,0,0.5)'
         document.body.style.height='120%'
       document.getElementById('lang').style.display='block'
       visible_nation=true
    } else{
      document.querySelector('.pachild').style.opacity='1'
      document.getElementById('lang').style.display='none'
      document.body.style.backgroundColor='rgba(255,255,255)'
      visible_nation=false
    }
   
    e.preventDefault()
}

  return (
    <>
    <div className='navbar' >
          <div>
                 <h2> BOOKING.com </h2>
                 <p>
                      <Link to='/devise' className='devise' onClick={devise_or_nation} >XAF</Link>
                      <Link to='/nationalite'  className='nationalite'  onClick={devise_or_nation} > <img alt='xx' src={france} width='40px' height='40px' /> </Link>
                      <Link to='/add_etab' style={{ border : '2px solid white', padding : '5px' }} >Ajoueter Votre Etablissement</Link>
                      <button type='button' > REGISTER </button>
                      <button type='button' > LOGIN </button>
                 </p>
          </div>
             
          <div>
                   <ul>
                          <li className='lien_actif' > <FaBed /> <a href="/"> STAYS </a> </li>
                          <li> <IoMdAirplane />  <a href="/flight"> FLIGHTS </a> </li>
                          <li> <BiCar /> <a href="/car"> CAR RENTALS </a> </li>
                          <li> <BiBed /> <a href="/attraction"> ATTRACTIONS </a> </li>
                          <li> <AiOutlineCar />  <a href="/tax_airpot"> AIRPORT1 TAXI </a> </li>
                   </ul>
          </div>
    </div>
    <SelectLangue />
    </>
  )
}


