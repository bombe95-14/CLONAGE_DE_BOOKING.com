import React, { useEffect } from 'react'

import './Body.css'
/*import img_line10 from "../../assets/c3.jpeg";
import img_line11 from "../../assets/ill.png";
import img_line12 from "../../assets/ie.png";*/

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

/*function Logement({ n_image, n_categorie, nbre_cate, children }) {
  return (<div className='categorie'>
          <img src={n_image} alt="" width='10%' height='250px' /><br/>
            <h3> {n_categorie} </h3>
            <p> { nbre_cate + ' ' + n_categorie } </p>
    </div>
  )
}*/

function Kamer({ n_image, n_categorie, nbre_cate, children }) {
  return (<div className='cat'>
          <img src={n_image} alt=""  height='250px' width='90%' /><br/>
            <h3> {n_categorie} </h3>
            <p> { nbre_cate + ' etablissement' } </p>
    </div>
  )
}


/*function HomeLove({ n_image, list_ch }) {
  return (<div className='categorie'>
          <img src={n_image} alt="" width='285%' height='250px' /><br/>
           <h3> { list_ch[0] } </h3>
           <span> { list_ch[1] } </span>
           <h3> { 'Starting from $' + list_ch[2] } </h3>
           <p> <button style={{ backgroundColor : 'blue', color : 'white', padding : ' 5px ' }}> { list_ch[3] } </button> <span> { list_ch[4] } </span> </p>
    </div>
  )
}*/



export default function Body() { //const tab_multi={ line1 : [ [ 'Dublin', 123 , img_line10 ], [ 'Reno', 533, img_line11 ], [ 'Austin', 532, img_line12 ] ] }
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
    
    let parti_visib_kamer=1
    let elt_tab_visib=0
    useEffect(() => {
     // let parti_visib_kamer=1
      setInterval(() => {
       const visib_curent = parti_visib_kamer
       parti_visib_kamer++
       // eslint-disable-next-line react-hooks/exhaustive-deps
       parti_visib_kamer = parti_visib_kamer<4 ? parti_visib_kamer : 1
       
       document.getElementById('parti_' + visib_curent).style.display='none'
       document.getElementById('parti_' + parti_visib_kamer).style.display='flex'

      }, 7000);
    }, [ ]);

    useEffect( ()=>{
            setInterval(() => {
                elt_tab_visib++
                // eslint-disable-next-line react-hooks/exhaustive-deps
                elt_tab_visib = elt_tab_visib<5 ? elt_tab_visib : 0
                setLocal( locals[elt_tab_visib] )
            }, 10000);
    }, []
    )

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
                  <div>  
                  <h1><pre> Trouver <br/>
                           {local}  <br/>
                            pour Votre Prochain Sejour 
                        </pre></h1> <br/> <button> Decouvrir des Hebergements Independants </button> </div>
                  <img src={chat} alt="" />
         </div>     

        <div id='love_destin' >
                <h2> Des destinations qu'on adore </h2> <br/>
                <div>
                      <ul>
                           <li > <a href="#"  className='actif' id='ongle1' onClick={handle2} > Region </a> </li>
                           <li  > <a href="#" id='ongle2' onClick={handle2} > Ville </a> </li>
                           <li > <a href="#"  id='ongle3' onClick={handle2} >  Site d'interet </a> </li>
                      </ul>

                      <div>  
                               <div id='oncle1' > 
                                      <Item donne={data.reg} />
                               </div>

                               <div id='oncle2' > 
                                               <div id='parti_1' >       
                                               <div style={{ marginBotton : '10px' }} >
                                                         <h3> <a href="">Courbevoie, France </a> </h3>
                                                         <a href="">41 locations de vacances </a>,
                                                         <a href=""> 40 appartements </a>,
                                                         <a href="">10 appart'hôtels </a>
                                               </div><br/>

                                               <div style={{ marginBotton : '10px' }}>
                                                         <h3><a href="">Great Yarmouth, Royaume-Uni </a></h3>
                                                         <a href="">170 locations de vacances </a>,
                                                        
                                                         <a href="">70 cottages, 60 villas </a>,
                                                         <a href="">60 maisons de vacances </a>,
                                                         <a href="">51 appartements </a>                                                       
                                               </div>  <br/>

                                               <div style={{ marginBotton : '10px' }}>
                                                        <h3><a href="">Canton, Chine </a></h3>
                                                        <a href="">92 locations de vacances </a>,
                                                        <a href="">92 appartements </a>,
                                                        <a href="">16 appart'hôtels </a>,
                                                        <a href=""> 9 auberges de jeunesse </a>                                                    
                                               </div>
                                               </div>
                                               
                                               <div id='parti_2' >
                                               <div style={{ marginBotton : '10px' }}>
                                                         <h3><a href="">Amsterdam, Pays-Bas </a></h3>
                                                         <a href="">603 locations de vacances </a>,
                                                         <a href="">306 B&B / chambres d'hôtes </a>,
                                                         <a href="">211 appartements </a>,
                                                         <a href="">81 séjours chez l'habitant </a>,
                                                         <a href="">37 auberges de jeunesse </a>
                                               </div><br/>

                                               <div style={{ marginBotton : '10px' }}>
                                                         <h3><a href="">Marseille, France </a></h3>
                                                         <a href="">1 056 locations de vacances </a>,
                                                         <a href="">956 appartements </a>,
                                                         <a href="">53 cottages </a>,
                                                         <a href="">51 maisons de vacances </a>,
                                                         <a href="">51 villas </a> 
                                               </div><br/>

                                               <div style={{ marginBotton : '10px' }}>
                                                         <h3><a href="">   Lisbonne, Portugal </a></h3>
                                                         <a href="">3 997 locations de vacances </a>,
                                                         <a href="">3 560 appartements </a>,
                                                         <a href="">352 B&B / chambres d'hôtes </a>,
                                                         <a href="">332 séjours chez l'habitant </a>,
                                                         <a href="">293 maisons d'hôtes </a> 
                                               </div>
                                               </div>

                                              <ul id='parti_3' className='ville' >  
                                              <li><a href=""> Zermatt <br/> 556 hôtels</a></li>
                                              <li><a href="">Lucern <br/> 188 hôtels</a></li>
                                              <li><a href="">Lugano <br/> 236 hôtels</a></li>
                                              <li><a href="">Lausanne <br/> 89 hôtels</a></li>
                                              </ul>

                                              <ul id='parti_4' className='ville' >
                                                       <li><a href=""><span>Interlaken</span> <br/> 228 hôtels </a></li>       
                                                       <li><a href=""><span> Genève</span> <br/> 247 hôtels </a></li>   
                                                       <li><a href=""><span>Ostende</span> <br/> 426 hôtels </a></li>   
                                                       <li><a href=""><span>Bruxelles</span> <br/> 1151 hôtels</a></li>   
                                              </ul>

                                              <ul id='parti_5'  style={{ display : 'none' }}>
                                                                  <li><a href=""><span></span> Luxembourg 217 hôtels</a></li>       
                                                                  <li><a href=""><span></span>Trouville-sur-Mer 227 hôtels</a></li>   
                                                                  <li><a href=""><span></span>Toulousen1043 hôtels</a></li>   
                                                                  <li><a href=""><span></span>Strasbourg 675 hôtels</a></li>   
                                              </ul>

                                              <ul id='parti_6' style={{ display : 'none' }}>
                                                   <li><a href=""><span></span>Saint-Malo
                                                   529 hôtels</a></li>       
                                                   <li><a href=""><span></span></a> Saint-Jean-de-Luz
                                                   348 hôtels</li>   
                                                   <li><a href=""><span></span>Les Saintes-Maries-de-la-Mer
                                                   165 hôtels</a></li>   
                                                   <li><a href=""><span></span>Royan
                                                   300 hôtels </a></li>            
                                               </ul>


                                              <ul id='parti_7'style={{ display : 'none' }}>
                                                      <li><a href=""><span></span></a> Rouen
                                                      391 hôtels</li>       
                                                      <li><a href=""><span></span></a>Rennes
                                                      242 hôtels</li>   
                                                      <li><a href=""><span></span></a>Porto-Vecchio
                                                      567 hôtels</li>   
                                                      <li><a href=""><span></span>Porquerolles
                                                      23 hôtels </a></li>  
                                              </ul>  

                                              <ul id='parti_8'style={{ display : 'none' }}>
                                                      <li><a href=""><span></span></a>Perpignan
                                                      195 hôtels
                                                      </li>       
                                                      <li><a href=""><span></span>Paris
                                                      7573 hôtels</a></li>   
                                                      <li><a href=""><span></span></a>Orléans
                                                      122 hôtels</li>   
                                                      <li><a href=""><span></span></a>Nice
                                                      3272 hôtels</li>
                                              </ul>    
                                              
                                              <ul id='parti_9'style={{ display : 'none' }}>
                                                      <li><a href=""><span></span></a> Nantes 438 hôtels</li>       
                                                      <li><a href=""><span></span>Montpellier  873 hôtels</a></li>   
                                                      <li><a href=""><span></span></a>Lyon 1308 hôtels</li>   
                                                      <li><a href=""><span></span></a>Lille 609 hôtels</li> 
                                              </ul> 

                                              <ul id='parti_10'style={{ display : 'none' }}>
                                                      <li><a href=""><span></span></a> Le Touquet-Paris-Plage 141 hôtels</li>       
                                                      <li><a href=""><span></span></a>Les Sables dʼOlonne 681 hôtels</li>   
                                                      <li><a href=""><span></span></a>La Rochelle  649 hôtels</li>   
                                                      <li><a href=""><span></span></a>Honfleur  478 hôtels</li> 
                                              </ul> 

                                              <ul id='parti_11'style={{ display : 'none' }}>
                                                      <li><a href=""><span></span></a> Grenoble   197 hôtels</li>       
                                                      <li><a href=""><span></span></a>Gérardmer 286 hôtels</li>   
                                                      <li><a href=""><span></span></a>Fontainebleau 65 hôtels</li>   
                                                      <li><a href=""><span></span></a>Étretat 70 hôtels</li> 
                                              </ul> 

                                              <ul id='parti_12'style={{ display : 'none' }}>
                                                      <li><a href=""><span></span></a> La Baule 247 hôtels</li>       
                                                      <li><a href=""><span></span></a>Deauville 329 hôtels</li>   
                                                      <li><a href=""><span></span></a>Clermont-Ferrand 131 hôtels</li>   
                                                      <li><a href=""><span></span>Chartres 100 hôtel</a></li> 
                                              </ul> 

                               </div>

                               <div id='oncle3' > 
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
const handleClick=(e)=>{
          const element=e.target  
          const val_click=element.textContent  
          
                  const visib_current=part_visib
                  if( val_click==='>' ){
                    console.log('on avance')
                    part_visib++
                    part_visib = part_visib>4 ? 1 : part_visib
                  } else{
                               console.log('on rentre')
                               
                               part_visib = part_visib===1 ? 1 : part_visib-1
                  }
                  document.querySelector('#type_props #parti_' + visib_current).style.display='none'
                  document.querySelector('#type_props #parti_' + part_visib).style.display='flex'
                  e.preventDefault()
                
}

const handle2=(e)=>{
         const elt_actif=document.querySelector('.actif')
         const elt_actual_click=e.target

         let id_elt_visible=elt_actif.id
         let id_elt_a_affiche=elt_actual_click.id 
         
         if(elt_actif.className!==elt_actual_click.className){
          elt_actif.className=''
          elt_actual_click.className='actif'

          id_elt_visible=id_elt_visible.replace('g', 'c')
          id_elt_a_affiche = id_elt_a_affiche.replace('g', 'c')

          console.log( id_elt_a_affiche + '\n' +  id_elt_visible + '\n' )

          document.getElementById(id_elt_visible).style.display='none'
          if(id_elt_a_affiche==='oncle2'){
            document.getElementById(id_elt_a_affiche).style.display='flex'
          }else{
          document.getElementById(id_elt_a_affiche).style.display='grid'
          }
         }
         e.preventDefault()
}
