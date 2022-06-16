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

import kome from "../../assets/book/comme1.PNG";
import kome2 from "../../assets/book/comme2.PNG";
import kome3 from "../../assets/book/comme3.PNG";
import kome4 from "../../assets/book/comme4.PNG";
import kome5 from "../../assets/book/comme5.PNG";
import kome6 from "../../assets/book/972064.jpg";
import kome7 from "../../assets/book/71365537.jpg";
import kome8 from "../../assets/book/72203688.jpg";
import kome9 from "../../assets/book/72203757.jpg";
import kome10 from "../../assets/book/72203920.jpg";

import h from "../../assets/book/heberge.jpg";
import h1 from "../../assets/book/heberge1.jpg";
import h2 from "../../assets/book/heberge2.jpg";
import h3 from "../../assets/book/heberge3.jpg";
import h4 from "../../assets/book/heberge4.jpg";
//import h5 from "../../assets/book/heberge5.jpg";
import h6 from "../../assets/book/heberge6.jpg";
import h7 from "../../assets/book/heberge7.jpg";
import h8 from "../../assets/book/heberge8.jpg";
import h9 from "../../assets/book/heberge9.jpg";
import h10 from "../../assets/book/heberge10.jpg";
import h11 from "../../assets/book/heberge11.jpg";
import h12 from "../../assets/book/chut.PNG";
import h13 from "../../assets/book/heberge13.jpg";
import h14 from "../../assets/book/heberge18.jpg";
import h15 from "../../assets/book/heberge15.jpg";
import h16 from "../../assets/book/heberge16.jpg";
import h17 from "../../assets/book/heberge17.jpg";
import chat from "../../assets/book/chat.PNG"



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
    const locals=['une maison de vacance', 'un appat d\'hotel', 'un cottage', 'un hebergement independant', 'un appartement']
    let pos_local=0
    const [local, setLocal] = React.useState(locals[pos_local]);
    

  return (
    <div className="bod">
    
         <div>
                <div style={{ margin : '0 auto', }} > <img src={kome} alt="" width='48%' height='375px' /><img src={kome2} alt="" width='52%' height='375px'  /> </div>
                <div style={{ margin : '0 auto',  }} >
                          <img src={kome3} alt=""  width='33%' height='350px' /><img src={kome4} alt="" height='350px'  width='34%' /> 
                          <img src={kome5} alt=""  width='33%' height='350px' />
                </div>
         </div>
  
         <div id='kamer' > <br/>
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

         <div id='type_props'>   <br/><br/>
                 <h2> Browse by property type </h2>
                 <div> 
                              <a onClick={handleClick} href="#" style={{ position : 'relative', top : '120px', fontSize : '1.5em' , textDecoration : 'none', color : 'black', backgroundColor : 'white' }} >&lt;</a>     
                              <div className='type' id='parti_1' > 
                                     <div> <img src={h1} alt="" width='100%' /> <div> <h3>Villas</h3> <p>452 884 Villas</p> </div> </div>
                                     <div> <img src={h2} alt=""  width='100%' />  <div> <h3>Villas</h3> <p>452 884 Villas</p> </div></div>
                                     <div> <img src={h3} alt=""  width='100%' /> <div> <h3>Villas</h3> <p>452 884 Villas</p> </div></div>
                                      <div> <img src={h4} alt=""  width='100%' /> <div> <h3>Villas</h3> <p>452 884 Villas</p> </div></div>
                              </div>

                              <div className='type'  id='parti_2' style={{ display : 'none' }} > 
                                                         <div> <img src={h14} alt="" width='100%' /> <div> <h3>Villas</h3> <p>452 884 Villas</p> </div> </div>
                                                         <div> <img src={h15} alt=""  width='100%' />  <div> <h3>Villas</h3> <p>452 884 Villas</p> </div></div>
                                                         <div> <img src={h16} alt=""  width='100%' /> <div> <h3>Villas</h3> <p>452 884 Villas</p> </div></div>
                                                         <div> <img src={h17} alt=""  width='100%' /> <div> <h3>Villas</h3> <p>452 884 Villas</p> </div></div>
                              </div>

                              <div className='type'  id='parti_3' style={{ display : 'none' }} > 
                                                         <div> <img src={h} alt="" width='100%' /> <div> <h3>Villas</h3> <p>452 884 Villas</p> </div> </div>
                                                            <div> <img src={h6} alt=""  width='100%' />  <div> <h3>Villas</h3> <p>452 884 Villas</p> </div></div>
                                                          <div> <img src={h7} alt=""  width='100%' /> <div> <h3>Villas</h3> <p>452 884 Villas</p> </div></div>
                                                            <div> <img src={h8} alt=""  width='100%' /> <div> <h3>Villas</h3> <p>452 884 Villas</p> </div></div> 
                              </div>

                              <div className='type' style={{ display : 'none' }}  id='parti_4' > 
                                                         <div> <img src={h9} alt="" width='100%' /> <div> <h3>Villas</h3> <p>452 884 Villas</p> </div> </div>
                                                            <div> <img src={h10} alt=""  width='100%' />  <div> <h3>Villas</h3> <p>452 884 Villas</p> </div></div>
                                                          <div> <img src={h11} alt=""  width='100%' /> <div> <h3>Villas</h3> <p>452 884 Villas</p> </div></div>
                                                            <div> <img src={h13} alt=""  width='100%' /> <div> <h3>Villas</h3> <p>452 884 Villas</p> </div></div> 
                              </div>
                              <a onClick={handleClick} href="#" style={{ position : 'relative', left : '99%', bottom : '180px', fontSize : '1.5em' , textDecoration : 'none', color : 'black', backgroundColor : 'white' }} >&gt;</a>     
                 </div>
                    
                 <div className='offre_privi' >
                         <img src={h12} alt="" />
                         <div>
                                <h3> Abonnez vous aux Offres Privillege  </h3><br/>
                                <p>Vous découvrirez ce que vous économiserez en vous abonnant</p> <br/>
                                <input type="email" placeholder='Saisissez Votre Email ' name='my_mail' style={{ width : '40%', clear : 'both' }} /> <button> Inscrivez-moi </button>
                         </div> 
                 </div>

         </div>     

         <div id='next_trav'>
                <h2> Trouvés des idées pour votre prochain voyage </h2><br/>
                <div>
                    <div className='unun'>
                       <div className='un' > <img src={kome6} alt="" width='100%' /> 
                             <div> <h3>Six dont les chansons ont marque l'eurovision</h3> 
                                   <p> Des voyages inspirées par certains des plus grand tubes pop de vision </p>
                             </div> 
                       </div>

                       <div className='un' > 
                             <img src={kome7} alt="" width='100%' /> 
                             <div> <h3>Sept d'interet europeen a ne pas manquer</h3> 
                                    <p> Des voyages inspirées par certains des plus grand tubes pop de vision </p>
                             </div> 
                       </div>

                       <div className='un' > 
                                <img src={kome8} alt="" width='100%' /> 
                                <div> <h3>Six dont les chansons ont marque l'eurovision</h3> 
                                       <p> Des voyages inspirées par certains des plus grand tubes pop de vision </p>
                                </div> 
                       </div>
                    </div>   

                    <div className='deuxdeux'>  
                              <div className='deux'> 
                                         <img src={kome9} alt="" width='98%' height='400px'/> 
                                         <div> <h3>Six dont les chansons ont marque l'eurovision</h3> 
                                               <p> Des voyages inspirées par certains des plus grand tubes pop de vision </p>
                                         </div> 
                              </div>

                              <div className='deux'> 
                                           <img src={kome10} alt="" width='100%' height='400px' /> 
                                           <div> <h3>Six dont les chansons ont marque l'eurovision</h3> 
                                                 <p> Des voyages inspirées par certains des plus grand tubes pop de vision </p>
                                           </div> 
                              </div>
                    </div>
                      
                </div>
         </div> 
          
         <div className='lechat' >
                  <div>  <h1> Trouver <br/> {local} <br/> Pour Votre Prochain Sejour </h1> <br/> <button> Decouvrir des Hebergements Independants </button> </div>
                  <img src={chat} alt="" />
         </div>     

        <div id='love_destin' >
                <h2> Des destinations qu'on adore </h2> <br/>
                <div>
                      <ul>
                           <li className='actif' id='onglet1' > <a href="#"  > Region </a> </li>
                           <li> <a href="#" id='onglet2' > Ville </a> </li>
                           <li> <a href="#" id='onglet3' >  Site d'interet </a> </li>
                      </ul>

                      <div>  
                               <div id='region' > 
                                      <Item donne={data.reg} />
                               </div>

                               <div id='ville' > 
                               
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