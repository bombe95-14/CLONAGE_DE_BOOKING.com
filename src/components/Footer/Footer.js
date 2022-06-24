import React from 'react'

import './Footer.css';

import agoda from '../../assets/other _ien/agoda.png'
import book from '../../assets/other _ien/booking.png'
import kayak from '../../assets/other _ien/kayak.png'
import open from '../../assets/other _ien/open.png'
import price from '../../assets/other _ien/price.png'
import rent from '../../assets/other _ien/rental.png'

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
                     <li> <a href=""> Durabilite </a> </li>
                     <li> <a href=""> Actualité presse </a> </li>
                     <li> <a href=""> Reclamation partenaires </a> </li>
                     <li> <a href=""> Le fonctionnement de notre site </a> </li>
                     <li> <a href=""> A propos de nos partenaires </a> </li>
                     <li> <a href=""> Aide sur Booking.com </a> </li>
               </ul>
    </div>
      
     <p className='first_para' >Booking.com fait partie de Booking Holdings Inc., le leader mondial des voyages en ligne et services associés</p>
     <br/>
     <p className='last_para' >
               <a href="kayak.fr"> <img src={kayak} alt="" /> </a>  
               <a href="open.com"> <img src={open} alt="" /> </a>  
               <a href=""> <img src={book} alt="" /> </a>  
               <a href="rentalsCar.com"> <img src={rent} alt="" /> </a>  
               <a href="agida.com"> <img src={agoda} alt="" /> </a>  
               <a href="price.com"> <img src={price} alt="" /> </a>     
     </p>

    </React.Fragment>
    )
}



