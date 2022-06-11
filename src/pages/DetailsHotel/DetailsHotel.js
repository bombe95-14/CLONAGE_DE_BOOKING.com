import React from 'react'

export default function DetailsHotel ({ score, price, duree }) {
  return (    <div className='details_hotel' >
            <div>  </div>

            <div className='part2'> 
                   <img src="" alt="" />
                   <img src="" alt="" />
                   <img src="" alt="" />
                   <img src="" alt="" />
                   <img src="" alt="" />
                   <img src="" alt="" />
                   <img src="" alt="" />
                   <img src="" alt="" />
                   <img src="" alt="" />
            </div>
            
            <div className="part3"> 

                     <div> 
                             <h2> Stay in the heart of city </h2>
                             <p>  
                                 lundi mardi mercredi jeudi ve,dredi janvier fevrier mars avril mai juin juillet aout septembre octobre novembre decembre  lundi mardi mercredi jeudi ve,dredi janvier fevrier mars avril mai juin juillet aout septembre octobre novembre decembre
                                 lundi mardi mercredi jeudi ve,dredi janvier fevrier mars avril mai juin juillet aout septembre octobre novembre decembre  lundi mardi mercredi jeudi ve,dredi janvier fevrier mars avril mai juin juillet aout septembre octobre novembre decembre
                                 lundi mardi mercredi jeudi ve,dredi janvier fevrier mars avril mai juin juillet aout septembre octobre novembre decembre  lundi mardi mercredi jeudi ve,dredi janvier fevrier mars avril mai juin juillet aout septembre octobre novembre decembre
                                 lundi mardi mercredi jeudi ve,dredi janvier fevrier mars avril mai juin juillet aout septembre octobre novembre decembre v lundi mardi mercredi jeudi ve,dredi janvier fevrier mars avril mai juin juillet aout septembre octobre novembre decembre
                                 lundi mardi mercredi jeudi ve,dredi janvier fevrier mars avril mai juin juillet aout septembre octobre novembre decembre  lundi mardi mercredi jeudi ve,dredi janvier fevrier mars avril mai juin juillet aout septembre octobre novembre decembre  lundi mardi mercredi jeudi ve,dredi janvier fevrier mars avril mai juin juillet aout septembre octobre novembre decembre
                                 lundi mardi mercredi jeudi ve,dredi janvier fevrier mars avril mai juin juillet aout septembre octobre novembre decembre val_button_click
                                 lundi mardi mercredi jeudi ve,dredi janvier fevrier mars avril mai juin juillet aout septembre octobre novembre decembre  lundi mardi mercredi jeudi ve,dredi janvier fevrier mars avril mai juin juillet aout septembre octobre novembre decembre        
                             </p>
                     </div>

                     <div>
                            <h3> Perfer for a 9-night stay </h3>
                            <p> located in the real heart of Krakow, this property has an excellent.<br/>
                                  location score of { score }
                            </p>
                            <p> {price} <br/>
                                 {duree}
                            </p>
                            <button> Reserve or Book now </button>
                     </div>
            </div>
</div>
  )
}
