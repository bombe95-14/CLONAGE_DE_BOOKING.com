import React from 'react'

import './BeforeFooter.css'

export default function BeforeFooter() {
  return (
    <div className='before_foot' >
             <div  >
                     <h3> Gagnez du temps et de l'argent </h3><br/>
                     <p> Inscrivez-vous et nous vous enverrons les meilleures offres </p><br/>
                     <input style={{ padding : '10px', width : '30%' }} type="email" name='mail_time' placeholder='Votre E-mail' /> <button style={{ padding : '10px' }} > Inscrivez Vous </button><br/><br/>
                     <input type="checkbox" /> <label> Envoyez-moi un lien pour télécharger GRATUITEMENT l'appli Booking.com ! </label>
             </div>

             <div> 
                     <a href="#" style={{ border : '1px solid white', padding : '5px 10px', margin : ' 20px auto', display : 'block', width : 'max-content' }} > Ajouter Votre etablissement </a><hr/>
                     <ul>
                           <li> <a href="#"> Versio Mobile </a> </li>
                           <li> <a href="#"> Votre Compte </a> </li>
                           <li> <a href="#"> Modification de votre reservation en ligne </a> </li>
                           <li> <a href="#"> Devenir Affilié </a> </li>
                           <li> <a href="#"> Aide du Service Client </a> </li>
                           <li> <a href="#"> Booking.com Business </a> </li>
                     </ul>
             </div>

    </div>
  )
}
