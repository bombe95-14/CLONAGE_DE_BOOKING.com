import React from 'react'

import './Navbar.css'

import {FaBed} from 'react-icons/fa'
import {BiBed} from 'react-icons/bi'
import {AiOutlineCar} from 'react-icons/ai'
import {BiCar} from 'react-icons/bi'
import { IoMdAirplane } from "react-icons/io";

import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar' >
          <div>
                 <h2> BOOKING.com </h2>
                 <p>
                      <Link to='/devise'>XAF</Link>
                      <Link to='/add_etab' style={{ border : '2px solid white', padding : '5px' }} >Ajoueter Votre Etablissement</Link>
                      <button type='button' > REGISTER </button>
                      <button type='button' > LOGIN </button>
                 </p>
          </div>
             
          <div>
                   <ul>
                          <li> <FaBed /> <a href="/"> STAYS </a> </li>
                          <li> <IoMdAirplane />  <a href="/flight"> FLIGHTS </a> </li>
                          <li> <BiCar /> <a href="/car"> CAR RENTALS </a> </li>
                          <li> <BiBed /> <a href="/attraction"> ATTRACTIONS </a> </li>
                          <li> <AiOutlineCar />  <a href="/tax_airpot"> AIRPORT TAXI </a> </li>
                   </ul>
          </div>
    </div>
  )
}
