import React from 'react'

import './hotels.css'
import {FiUser} from 'react-icons/fi'

import img_line10 from "../../assets/c3.jpeg";
import img_line11 from "../../assets/ill.png";
import img_line12 from "../../assets/ie.png";
import chat from '../../assets/book/chut.PNG';

import ihome_l1 from "../../assets/c1.jpeg";
import ihome_l2 from "../../assets/c2.jpeg";
import ihome_l3 from "../../assets/c3.jpeg";
import ihome_l4 from "../../assets/c4.jpeg";
import ihome_l5 from "../../assets/c5.jpeg";
import ihome_l6 from "../../assets/c6.jpeg";
import SpecialCompo2 from '../../components/Special/Special_compo2/SpecialCompo2';
/*import ihome_l7 from "../../assets/c7.jpeg";
import ihome_l8 from "../../assets/c8.jpeg";
import ihome_l9 from "../../assets/co.jpg";
import ihome_l10 from "../../assets/c10.jpeg";
import ihome_l11 from "../../assets/c11.jpeg";
import ihome_l12 from "../../assets/c12.jpeg";*/




export default function Hotels() {

  const [adult, setAdult] = React.useState(1);
  const [room, setRoom] = React.useState(0);
  const [child, setChild] = React.useState(0);


       const makala=(e)=>{

       }


  return ( <React.Fragment>
    <p className='para' style={{  marginTop: '-30px', marginLeft : '5%' }} >
          <a href="">ACCUEIL</a>   &gt;
          <a href="">Espagne</a>   &gt;
          <a href="">Madrid</a>   &gt;
          Résultats de votre recherche
    </p>
    <br/>
    <div className='cote_left'>
          <h3> Search </h3><br/>
          <form> 
          <div> <label> Destination /Nom Etablissement : </label><br/> <input type="text" style={{ width : '70%', fontSize : '1.7em', padding : '5px'}}/> </div><br/>
          <div style={{  borderRight : '5px solid rgb(230, 195, 18)',  padding : '10px', backgroundColor : 'white', width : '80%' }} onClick={ makala } > <FiUser /> {adult} adult - {room} rooms - {child} children </div>
          <SpecialCompo2 />
          <br/>
          <div style={{  borderRight : '5px solid rgb(230, 195, 18)',  marginTop : '-110px',  marginBottom : '20px'}} >
                   <input type="checkbox" /> <label> l'm travelling for work </label><br/><br/>
                   <input type="checkbox" /> <label> Logements entier </label> <br/><br/>
                      <a href="#" style={{ width : '70%', color : 'white', backgroundColor : 'blue', padding : '10px' }} > Rechercher </a>
          </div>
          </form>
    </div>

    <div id='dessous_left' >
                
             <h2> Filtrer par : </h2>
             <div className='filt_pop'><hr/>
                     <h3> Filtres Populaires </h3>
                     <ul>
                            <li> <input type="checkbox" /> <span>Hotels</span> <span>128</span></li>
                            <li> <input type="checkbox" /> <span>Annulation Gratuite</span> <span>128</span> </li>
                            <li> <input type="checkbox" /> <span>4 Etoiles</span> <span>12</span> </li>
                            <li> <input type="checkbox" /> <span>Appartements</span> <span>84</span> </li>
                            <li> <input type="checkbox" /> <span>Maison d'hotes</span> <span>80</span> </li>
                            <li> <input type="checkbox" /> <span>Moins de 3km</span> <span>190</span> </li>
                            <li> <input type="checkbox" /> <span>Maisons/Appartements entier</span> <span>84</span> </li>
                            <li> <input type="checkbox" /> <span>B & B / Chambres d'hotes</span> <span>4</span> </li>
                     </ul>
             </div>

             <div className='budget'><hr/>
                      <h3> Votre budget (par nuit) </h3>
                      <ul>
                           <li> <input type="checkbox" /> <span>XAF 20 000 - XAF 40 000</span> <span>128</span></li>
                               <li> <input type="checkbox" /> <span>XAF 40 000 - XAF 60 000</span> <span>128</span> </li>
                           <li> <input type="checkbox" /> <span>XAF 60 000 - XAF 80 000</span> <span>12</span> </li>
                           <li> <input type="checkbox" /> <span>XAF 80 000 - plus</span> <span>84</span> </li>
                           <li> <input type="checkbox" /> <span>Maison d'hotes</span> <span>80</span> </li>
                      </ul>
             </div>

             <div className='etoiles'><hr/>
             <h3> Etoiles </h3>
             <ul>
                  <li> <input type="checkbox" /> <span>1 Etoiles</span> <span>128</span></li>
                      <li> <input type="checkbox" /> <span>2 Etoiles</span> <span>128</span> </li>
                  <li> <input type="checkbox" /> <span>3 Etoiles</span> <span>12</span> </li>
                  <li> <input type="checkbox" /> <span>4 Etoiles</span> <span>84</span> </li>
                  <li> <input type="checkbox" /> <span>5 Etoiles</span> <span>80</span> </li>
                  <li> <input type="checkbox" /> <span>non classés</span> <span>80</span> </li>
             </ul>
             </div>

             <div className='health'><hr/>
                     <h3> Sante et Securite </h3>
                     <div><input type="checkbox" />Établissements ayant pris des mesures relatives à la santé et à la sécurité <span>194</span> </div>
             </div>

             <div className='bon_moment'><hr/>
                      <h3> Pour passer un bon moment </h3>
                      <ul>
                           <li> <input type="checkbox" /> <span>Centre de remise en forme</span> <span>128</span></li>
                               <li> <input type="checkbox" /> <span>Fitness</span> <span>128</span> </li>
                           <li> <input type="checkbox" /> <span>Massage</span> <span>12</span> </li>
                           <li> <input type="checkbox" /> <span>Balade a pied</span> <span>84</span> </li>
                           <li> <input type="checkbox" /> <span>Solarium</span> <span>80</span> </li>
                      </ul>
             </div>

             <div className='repas'><hr/>
                      <h3> Repas </h3>
                      <ul>
                           <li> <input type="checkbox" /> <span>Logement avec cuisine</span> <span>128</span></li>
                           <li> <input type="checkbox" /> <span>Petit-déjeuner compris</span> <span>128</span> </li>
                           <li> <input type="checkbox" /> <span>Tous les repas sont compris</span> <span>12</span> </li>
                           <li> <input type="checkbox" /> <span>Petit-déjeuner et déjeuner compris</span> <span>84</span> </li>
                           <li> <input type="checkbox" /> <span>Petit-déjeuner et diner compris</span> <span>80</span> </li>
                      </ul>
             </div>

             <div className='acess_h'><hr/>
             <h3> Accessibilité de l'hébergement </h3>
             <ul>
                  <li> <input type="checkbox" /> <span>Logement entièrement situé au rez-de-chaussée</span> <span>128</span></li>
                  <li> <input type="checkbox" /> <span>Étages supérieurs accessibles par ascenseur</span> <span>128</span> </li>
                  <li> <input type="checkbox" /> <span>Logement entièrement accessible en fauteuil roulant</span> <span>12</span> </li>
                  <li> <input type="checkbox" /> <span>Toilettes avec barres d'appui</span> <span>84</span> </li>
                  <li> <input type="checkbox" /> <span>Baignoires avec barres d'appui</span> <span>80</span> </li>
                  <li> <input type="checkbox" /> <span>Douche accessible en fauteuil roulant</span> <span>128</span></li>
                  <li> <input type="checkbox" /> <span>Douche à l'italienne</span> <span>128</span> </li>
                  <li> <input type="checkbox" /> <span>Toilettes surélevées</span> <span>12</span> </li>
                  <li> <input type="checkbox" /> <span> Lavabo bas adapté aux personnes à mobilité réduite</span> <span>84</span> </li>
                  <li> <input type="checkbox" /> <span>Cordon d'alarme dans la salle de bains</span> <span>80</span> </li>
             </ul>
             </div>

             <div className='quat'><hr/>
             <h3> Quatiers / Arrondissements </h3>
             <ul>
                  <li> <input type="checkbox" /> <span>Logement entièrement situé au rez-de-chaussée</span> <span>128</span></li>
                  <li> <input type="checkbox" /> <span>Étages supérieurs accessibles par ascenseur</span> <span>128</span> </li>
                  <li> <input type="checkbox" /> <span>Logement entièrement accessible en fauteuil roulant</span> <span>12</span> </li>
                  <li> <input type="checkbox" /> <span>Toilettes avec barres d'appui</span> <span>84</span> </li>
                  <li> <input type="checkbox" /> <span>Baignoires avec barres d'appui</span> <span>80</span> </li>
                  <li> <input type="checkbox" /> <span>Douche accessible en fauteuil roulant</span> <span>128</span></li>
                  <li> <input type="checkbox" /> <span>Douche à l'italienne</span> <span>128</span> </li>
                  <li> <input type="checkbox" /> <span>Toilettes surélevées</span> <span>12</span> </li>
                  <li> <input type="checkbox" /> <span> Lavabo bas adapté aux personnes à mobilité réduite</span> <span>84</span> </li>
                  <li> <input type="checkbox" /> <span>Cordon d'alarme dans la salle de bains</span> <span>80</span> </li>
                  <li> <input type="checkbox" /> <span>Logement entièrement situé au rez-de-chaussée</span> <span>128</span></li>
                  <li> <input type="checkbox" /> <span>Étages supérieurs accessibles par ascenseur</span> <span>128</span> </li>
                  <li> <input type="checkbox" /> <span>Logement entièrement accessible en fauteuil roulant</span> <span>12</span> </li>
                  <li> <input type="checkbox" /> <span>Toilettes avec barres d'appui</span> <span>84</span> </li>
                  <li> <input type="checkbox" /> <span>Baignoires avec barres d'appui</span> <span>80</span> </li>
                  <li> <input type="checkbox" /> <span>Douche accessible en fauteuil roulant</span> <span>128</span></li>
                  <li> <input type="checkbox" /> <span>Douche à l'italienne</span> <span>128</span> </li>
                  <li> <input type="checkbox" /> <span>Toilettes surélevées</span> <span>12</span> </li>
                  <li> <input type="checkbox" /> <span> Lavabo bas adapté aux personnes à mobilité réduite</span> <span>84</span> </li>
                  <li> <input type="checkbox" /> <span>Cordon d'alarme dans la salle de bains</span> <span>80</span> </li>
                  <li> <input type="checkbox" /> <span>Logement entièrement situé au rez-de-chaussée</span> <span>128</span></li>
                  <li> <input type="checkbox" /> <span>Étages supérieurs accessibles par ascenseur</span> <span>128</span> </li>
                  <li> <input type="checkbox" /> <span>Logement entièrement accessible en fauteuil roulant</span> <span>12</span> </li>
                  <li> <input type="checkbox" /> <span>Toilettes avec barres d'appui</span> <span>84</span> </li>
                  <li> <input type="checkbox" /> <span>Baignoires avec barres d'appui</span> <span>80</span> </li>
                  <li> <input type="checkbox" /> <span>Douche accessible en fauteuil roulant</span> <span>128</span></li>
                  <li> <input type="checkbox" /> <span>Douche à l'italienne</span> <span>128</span> </li>
                  <li> <input type="checkbox" /> <span>Toilettes surélevées</span> <span>12</span> </li>
                  <li> <input type="checkbox" /> <span> Lavabo bas adapté aux personnes à mobilité réduite</span> <span>84</span> </li>
                  <li> <input type="checkbox" /> <span>Cordon d'alarme dans la salle de bains</span> <span>80</span> </li>
             </ul>
             </div>

    </div>

    <div  style={{  marginTop: '-2600 px' }} id='cote_droit'>

        <div style={{ float : 'right', width : '60%', border : '2px red solid', marginRight : '3%', padding : '10px' }} id='un' >
          <div>  <h2> Madrid a : 250 etablissements trouvés </h2> <a href="#" style={{textDecoration : 'none', backgroundColor : 'blue', color : 'white', padding : '8px 5px'}} >Regarde la Carte</a> </div>
        
           <div  style={{  margin: '15px 0px', border :'1px solid whitesmoke', padding : '10px' }} >  
                  <img src={chat} alt=""  style={{  marginRight : '20px' }} />   
                  <div  >
                         <h2> Reservez votre sejour aujourd'hui et beneficie d'un taxi aeroport <br/> GRATUIT </h2>
                         <p> Pour les séjours de plus de XAF 360 776 dans les établissements affichant le badge « Taxi aéroport gratuit ».
                         <a href="#">En savoir plus</a> </p>
                  </div>
           </div>

           <ul className='ulx'>
              <li id='active' style={ { borderRight: '2px solid blueviolet' } } > <a href="#"  > Selection pour les longs sejour </a> </li>
              <li> <a href="#" style={ { borderRight: '2px solid blueviolet' } } > Logements entiers en premier </a> </li>
              <li> <a href="#" style={ { borderRight: '2px solid blueviolet' } } > Tarif ( le - cher en premier ) </a> </li>
              <li> <a href="#" style={{ fontSize : '2em' }} > .... </a> </li> 
           </ul>

        <ul className='ul2'>
              <li> Meilleur note et tarif plus bas </li>
              <li> Etoiles ( par ordre croissanr=t ) </li>
              <li> Etoiles ( par ordre decroissanr=t )  </li>
              <li> nombre d'etoiles et tarif </li>
              <li> Distance du centre ville </li>
              <li> Le plus de commentaire positif </li>
        </ul>

        </div>
         
        <div style={{ }} >
        <div className='cote_right' >
           <SimpleHotel n_image={img_line10} other_value={ [ ['Colton house house', 'Excellent', 8.6], '2km from center', 'Free airport taxi', 
        ['Aueen studio suite', '1 full bed', '$120'], ['includes taxes and fixes', 'Free cancellation'],
        'you can cancel later, so lock' ] } />


        <SimpleHotel n_image={img_line11} other_value={ [ ['Colton house house', 'Excellent', 8.6], '2km from center', 'Free airport taxi', 
        ['Aueen studio suite', '1 full bed', '$120'], ['includes taxes and fixes', 'Free cancellation'],
        'you can cancel later, so lock' ] } />


        <SimpleHotel n_image={img_line12} other_value={ [ ['Colton house house', 'Excellent', 8.6], '2km from center', 'Free airport taxi', 
        ['Aueen studio suite', '1 full bed', '$120'], ['includes taxes and fixes', 'Free cancellation'],
        'you can cancel later, so lock' ] } />


        <SimpleHotel n_image={ihome_l1} other_value={ [ ['Colton house house', 'Excellent', 8.6], '2km from center', 'Free airport taxi', 
        ['Aueen studio suite', '1 full bed', '$120'], ['includes taxes and fixes', 'Free cancellation'],
        'you can cancel later, so lock' ] } />


        <SimpleHotel n_image={ihome_l2}  other_value={ [ ['Colton house house', 'Excellent', 8.6], '2km from center', 'Free airport taxi', 
        ['Aueen studio suite', '1 full bed', '$120'], ['includes taxes and fixes', 'Free cancellation'],
        'you can cancel later, so lock' ] } />


        <SimpleHotel n_image={ihome_l3}  other_value={ [ ['Colton house house', 'Excellent', 8.6], '2km from center', 'Free airport taxi', 
        ['Aueen studio suite', '1 full bed', '$120'], ['includes taxes and fixes', 'Free cancellation'],
        'you can cancel later, so lock' ] } />


        <SimpleHotel n_image={ihome_l4}  other_value={ [ ['Colton house house', 'Excellent', 8.6], '2km from center', 'Free airport taxi', 
        ['Aueen studio suite', '1 full bed', '$120'], ['includes taxes and fixes', 'Free cancellation'],
        'you can cancel later, so lock' ] } />


        <SimpleHotel n_image={ihome_l5}  other_value={ [ ['Colton house house', 'Excellent', 8.6], '2km from center', 'Free airport taxi', 
        ['Aueen studio suite', '1 full bed', '$120'], ['includes taxes and fixes', 'Free cancellation'],
        'you can cancel later, so lock' ] } />


        <SimpleHotel n_image={ihome_l6}  other_value={ [ ['Colton house house', 'Excellent', 8.6], '2km from center', 'Free airport taxi', 
        ['Aueen studio suite', '1 full bed', '$120'], ['includes taxes and fixes', 'Free cancellation'],
        'you can cancel later, so lock' ] } />


        </div>
        </div>
    </div>

    </React.Fragment>
  )
}

function SimpleHotel({ n_image, other_value }) {
  return (<div className='hotel'>
    <img src={n_image} alt="" />
    <div> 
           <div className='line1'>
                 <h2> { other_value[0][0] } </h2>
                 <h2> { other_value[0][1] } </h2>
                 <h2 style={{ backgroundColor : 'blue', color : 'white', padding : '3px' }} > { other_value[0][2] } </h2>
           </div>
           
           <p> { other_value[1] } </p> <br/>
           
           <p style={{ backgroundColor : 'green', borderRadius : '5px' ,width : 'max-content' , color : 'white', padding : '8px' }}  > { other_value[2] } </p> <br/>
           
           <div className='line4'>
                 <div>
                       <h3> { other_value[3][0] } </h3><br/>
                       <p> { other_value[3][1] } </p>
                 </div>
                 <h3> { other_value[3][2] } </h3>
           </div>

           <div className='line5'> 
                  <p style={{ color : 'green' }}  > { other_value[4][0] } </p>
                  <p> { other_value[4][1] } </p>
           </div><br/>
           
           <div className='line5'> 
                <p> { other_value[5] } </p>
                <button style={{ backgroundColor : 'blue', borderRadius : '5px' , color : 'white', padding : '10px' }} > Voir Disponibilite</button>
           </div>
    </div>
</div>
  )
}
