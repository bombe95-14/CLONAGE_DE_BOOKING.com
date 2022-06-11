import React from 'react'

import './Footer.css';

import ihome_l1 from "../../assets/c1.jpeg";
import ihome_l2 from "../../assets/c2.jpeg";
import ihome_l3 from "../../assets/c3.jpeg";
import ihome_l4 from "../../assets/c4.jpeg";
import ihome_l5 from "../../assets/c5.jpeg";
import ihome_l6 from "../../assets/c6.jpeg";
import ihome_l7 from "../../assets/c7.jpeg";
import ihome_l8 from "../../assets/c8.jpeg";
import ihome_l9 from "../../assets/co.jpg";
import ihome_l10 from "../../assets/c10.jpeg";
import ihome_l11 from "../../assets/c11.jpeg";
import ihome_l12 from "../../assets/c12.jpeg";


function HomeLove({ n_image, list_ch }) {
    return (<div className='categorie'>
            <img src={n_image} alt=""  height='250px' width='100%' /><br/>
             <h3> { list_ch[0] } </h3>
             <span> { list_ch[1] } </span>
             <h3> { 'Starting from $' + list_ch[2] } </h3>
             <p> <button style={{ backgroundColor : 'blue', color : 'white', padding : ' 5px ' }}> { list_ch[3] } </button> <span> { list_ch[4] } </span> </p>
      </div>
    )
  }


export default function Footer () {
  return (   <React.Fragment>
      <div id='footer'>
               <ul>
                     <li> <a href=""> Countires </a> </li>
                     <li> <a href=""> Regions </a> </li>
                     <li> <a href=""> Cities </a> </li>
                     <li> <a href=""> Districts </a> </li>
                     <li> <a href=""> Airport </a> </li>
                     <li> <a href=""> Hotels </a> </li>
               </ul>

               <ul>
                     <li> <a href=""> Homes </a> </li>
                     <li> <a href=""> Apartments </a> </li>
                     <li> <a href=""> Resorts </a> </li>
                     <li> <a href=""> Villas </a> </li>
                     <li> <a href=""> Hostels </a> </li>
                     <li> <a href=""> Guests Houses </a> </li>
               </ul>

               <ul>
                     <li> <a href=""> Uniques places to stay </a> </li>
                     <li> <a href=""> Reviews </a> </li>
                     <li> <a href=""> unpacked travel articles </a> </li>
                     <li> <a href=""> Travel communities </a> </li>
                     <li> <a href=""> Seasonal and holiday deals </a> </li>                    
               </ul>

               <ul>
                     <li> <a href=""> Car rental </a> </li>
                     <li> <a href=""> Flight Finder </a> </li>
                     <li> <a href=""> Restaurants reservations </a> </li>
                     <li> <a href=""> Travel Agent </a> </li>
               </ul>

               <ul>
                     <li> <a href=""> Partner Help </a> </li>
                     <li> <a href=""> Careers </a> </li>
                     <li> <a href=""> Customer Services </a> </li>
                     <li> <a href=""> Sustainability </a> </li>
                     <li> <a href=""> Press center </a> </li>
                     <li> <a href=""> Safety Ressource center </a> </li>
                     <li> <a href=""> Investor Relations </a> </li>
                     <li> <a href=""> Terms & Conditions </a> </li>
               </ul>
    </div>
    </React.Fragment>
    )
}



