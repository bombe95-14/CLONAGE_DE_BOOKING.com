import React from 'react'

import './hotels.css'


import img_line10 from "../../assets/c3.jpeg";
import img_line11 from "../../assets/ill.png";
import img_line12 from "../../assets/ie.png";

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


export default function Hotels() {
  return ( <React.Fragment>
    <div className='cote_left'>
          <h3> Search </h3><br/>
          <form> 
          <div> <label> Destination : </label><br/> <input type="text" /> </div>
          <div> <label> Check-in Date : </label><br/>  <input type="text" /> </div>
          <div className='opt'> <br/>
                 <p> Options </p><br/>
                  <div> <label> Min price by night : </label><br/>  <input type="text" /> </div>
                  <div> <label> Max price by night : </label><br/> <input type="text" /> </div><br/>
                  <div> <label> Adult : </label><br/>  <input type="number" /> </div>
                  <div> <label> Children : </label><br/> <input type="number" /> </div><br/>
                  <div> <label> Rooms : </label><br/> <input type="number" /> </div><br/>
          </div>
          </form>
    </div>

    <div className='cote_right'>
           <Simple_Hotel n_image={img_line10} other_value={ [ ['Colton house house', 'Excellent', 8.6], '2km from center', 'Free airport taxi', 
        ['Aueen studio suite', '1 full bed', '$120'], ['includes taxes and fixes', 'Free cancellation'],
        'you can cancel later, so lock' ] } />


        <Simple_Hotel n_image={img_line10} other_value={ [ ['Colton house house', 'Excellent', 8.6], '2km from center', 'Free airport taxi', 
        ['Aueen studio suite', '1 full bed', '$120'], ['includes taxes and fixes', 'Free cancellation'],
        'you can cancel later, so lock' ] } />


        <Simple_Hotel n_image={img_line10} other_value={ [ ['Colton house house', 'Excellent', 8.6], '2km from center', 'Free airport taxi', 
        ['Aueen studio suite', '1 full bed', '$120'], ['includes taxes and fixes', 'Free cancellation'],
        'you can cancel later, so lock' ] } />


        <Simple_Hotel n_image={img_line10} other_value={ [ ['Colton house house', 'Excellent', 8.6], '2km from center', 'Free airport taxi', 
        ['Aueen studio suite', '1 full bed', '$120'], ['includes taxes and fixes', 'Free cancellation'],
        'you can cancel later, so lock' ] } />


        <Simple_Hotel n_image={img_line10} other_value={ [ ['Colton house house', 'Excellent', 8.6], '2km from center', 'Free airport taxi', 
        ['Aueen studio suite', '1 full bed', '$120'], ['includes taxes and fixes', 'Free cancellation'],
        'you can cancel later, so lock' ] } />


        <Simple_Hotel n_image={img_line10} other_value={ [ ['Colton house house', 'Excellent', 8.6], '2km from center', 'Free airport taxi', 
        ['Aueen studio suite', '1 full bed', '$120'], ['includes taxes and fixes', 'Free cancellation'],
        'you can cancel later, so lock' ] } />


        <Simple_Hotel n_image={img_line11} other_value={ [ ['Colton house house', 'Excellent', 8.6], '2km from center', 'Free airport taxi', 
        ['Aueen studio suite', '1 full bed', '$120'], ['includes taxes and fixes', 'Free cancellation'],
        'you can cancel later, so lock' ] } />


        <Simple_Hotel n_image={img_line10} other_value={ [ ['Colton house house', 'Excellent', 8.6], '2km from center', 'Free airport taxi', 
        ['Aueen studio suite', '1 full bed', '$120'], ['includes taxes and fixes', 'Free cancellation'],
        'you can cancel later, so lock' ] } />


        <Simple_Hotel n_image={img_line12} other_value={ [ ['Colton house house', 'Excellent', 8.6], '2km from center', 'Free airport taxi', 
        ['Aueen studio suite', '1 full bed', '$120'], ['includes taxes and fixes', 'Free cancellation'],
        'you can cancel later, so lock' ] } />


    </div>

    </React.Fragment>
  )
}

function Simple_Hotel({ n_image, other_value }) {
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
