import React, { Children } from 'react'

import './Body.css'
import img_line10 from "../../assets/c3.jpeg";
import img_line11 from "../../assets/ill.png";
import img_line12 from "../../assets/ie.png";

import kamer1 from "../../assets/kamer/bafou.jpg";
import kamer2 from "../../assets/kamer/buea.jpg";
import kamer3 from "../../assets/kamer/bamoun.jpg";
import kamer4 from "../../assets/kamer/doul_sale.jpg";

import kamer5 from "../../assets/kamer/dscha.jpg";
import kamer6 from "../../assets/kamer/edea.jpg";
import kamer7 from "../../assets/kamer/foumban.jpg";
import kamer8 from "../../assets/kamer/garoua.jpg";

import kamer9 from "../../assets/kamer/montkamer.jpg";
import kamer10 from "../../assets/kamer/musee_rois.webp";
import kamer11 from "../../assets/kamer/nord_ouest.jpg";
import kamer12 from "../../assets/kamer/yde.jpg";

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


function Logement({ n_image, n_categorie, nbre_cate, children }) {
  return (<div className='categorie'>
          <img src={n_image} alt="" width='10%' height='250px' /><br/>
            <h3> {n_categorie} </h3>
            <p> { nbre_cate + ' ' + n_categorie } </p>
    </div>
  )
}

function Kamer({ n_image, n_categorie, nbre_cate, children }) {
  return (<div className='cat'>
          <img src={n_image} alt=""  height='250px' width='90%' /><br/>
            <h3> {n_categorie} </h3>
            <p> { nbre_cate + ' etablissement' } </p>
    </div>
  )
}


function HomeLove({ n_image, list_ch }) {
  return (<div className='categorie'>
          <img src={n_image} alt="" width='285%' height='250px' /><br/>
           <h3> { list_ch[0] } </h3>
           <span> { list_ch[1] } </span>
           <h3> { 'Starting from $' + list_ch[2] } </h3>
           <p> <button style={{ backgroundColor : 'blue', color : 'white', padding : ' 5px ' }}> { list_ch[3] } </button> <span> { list_ch[4] } </span> </p>
    </div>
  )
}



export default function Body() { const tab_multi={ line1 : [ [ 'Dublin', 123 , img_line10 ], [ 'Reno', 533, img_line11 ], [ 'Austin', 532, img_line12 ] ] }
  const data={ reg : [[ 'Luberon', 'Belle-Ile-en-Mer', 'Canton du Testin', 'Ile de Ré', 'Gorges du Verdon',
  'Grisons', 'Ile d\'Oleron', 'Lac des Quatre-cantons', 'Bali', 'Koh Samui', 'Province de Phuket', 'Etat de New York',
  'Ile-de-France', 'Zanzibar', 'Lac Leman', 'Bora Bora', 'Corse', 'Tahiti', 'Santorin', 'Bonanjo' ],
     [1470, 187,1683,438,397,2982,307,350,12678,2211,5494,5384,12199,834,1564,59,4939,367,938,1762] ],
    interet : [ [ 'Gare du nord', 'Dune de Pyla', 'Port de Marseille', 'Gare de Bruxelle', 'Gare de l\'Est', 'Gare de Saint-Charles', 'Montparnasse', 'Dinesland Paris', 'Gare de Lyon', 'Parc de Beauval', 'Europa -Park',
    'Yasmine Hammanet', 'Paris Port de Versailles', 'Gare de Lyon', 'Parc Asterix' ], 
    [7602,42,1778,1150,7602,1778,7602,7602,1311,89,229,150,7602,7602,4] ] }
  return (
    <div className="bod">
    
         
         
         <h2> Browse by property type </h2>

          

         <div id='kamer' >
                 <h2> Explorez le Cameroon </h2><br/>
                 <p>Ces destination prisées ont beaucoup a offrir</p><br/>
                 <div>
                 <p className='navigue' style={{ marginRight : '15px' }} >&lt;</p>
                 <div id='parti_1' > 
                       <Kamer n_image={kamer1} n_categorie='Bafoussam' nbre_cate='10' /> 
                       <Kamer n_image={kamer2} n_categorie='Buea' nbre_cate='10' /> 
                       <Kamer n_image={kamer3} n_categorie='Bamoun' nbre_cate='10' /> 
                       <Kamer n_image={kamer4} n_categorie='Carriere Sable' nbre_cate='10' /> 
                 </div>

                 <div  id='parti_2' style={{ display : 'none' }} > 
                       <Kamer n_image={kamer5} n_categorie='Dschang' nbre_cate='10' /> 
                       <Kamer n_image={kamer6} n_categorie='Edea' nbre_cate='10' /> 
                       <Kamer n_image={kamer7} n_categorie='Foumban' nbre_cate='10' /> 
                       <Kamer n_image={kamer8} n_categorie='Garoua' nbre_cate='10' /> 
                 </div>

                 <div style={{ display : 'none' }} id='parti_3' > 
                       <Kamer n_image={kamer9} n_categorie='Mont Cameroun' nbre_cate='10' /> 
                       <Kamer n_image={kamer10} n_categorie='Musee Bamoun' nbre_cate='10' /> 
                       <Kamer n_image={kamer11} n_categorie='NORD OUEST' nbre_cate='10' /> 
                       <Kamer n_image={kamer12} n_categorie='YAOUNDE' nbre_cate='10' /> 
                 </div>
                 <p className='navigue' >&gt;</p>
                 </div>
         </div>

        <div id='love_destin' >
                <h2> Des destinations qu'on adore </h2>
                <div>
                      <ul>
                           <li> <a href=""> Region </a> </li>
                           <li> <a href=""> Ville </a> </li>
                           <li> <a href="">  Site d'interet </a> </li>
                      </ul>

                      <div>  
                               <div id='region' > 
                                      <Item donne={data.reg} />
                               </div>

                               <div> 
                               
                               </div>

                               <div id='site' > 
                                      <Item donne={data.interet} />
                               </div>
                      </div>

                </div>
        </div>

    </div>
  )
}




 function Item({donne}) {
   const x=donne[0]
   const y=donne[1]
  return ( 
    <>
          { x.map( (data, index)=> <div> <h3> {data} </h3> <p> {y[index]} </p> </div>  ) }
    </>
  )
}



let part_visib=1
let status_video='play'
const handleClick=(e)=>{
          const element=e.target  
          const val_click=element.textContent  
          
                  const visib_current=part_visib
                  if( val_click==='>' ){
                    console.log('on avance')
                    part_visib++
                    part_visib = part_visib>3 ? part_visib - 3 : part_visib
                  } else{
                               console.log('on rentre')
                               part_visib--
                               part_visib = part_visib<1 ? 1 : part_visib
                  }
                  document.getElementById('parti_' + visib_current).style.display='none'
                  document.getElementById('parti_' + part_visib).style.display='block'
                  e.preventDefault()
          
}