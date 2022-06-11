import React from 'react'

import './Specialcompo2.css'

 function SpecialCompo1() {
  return (
    <div > 
           <div> 
                 <p> Adult </p>
                 <p> 
                     <span> - </span>
                     <span> 0 </span>
                     <span> + </span>    
                 </p>
           </div>
           <div>
                <p> Children </p>
                <p> 
                   <span> - </span>
                   <span> 0 </span>
                   <span> + </span>    
                </p>   
           </div>
           <div>
               <p> Rooms </p>
                  <p> 
                      <span> - </span>
                      <span> 0 </span>
                      <span> + </span>    
                  </p>
           </div>
    </div>
  )
}


class SpecialCompo2 extends React.Component{

      constructor(props){
          super(props) 
          this.state={
              nb_adult : 1,
              nb_child : 0, 
              nb_room : 0
          }
      }

      handle(e){
          const valeur=e.target.textContent
          const content_previos_element = e.target.parentNode.parentNode.firstChild.textContent
          console.log(content_previos_element);

          if (content_previos_element===' Adult ') {

            if (valeur===' + ')    this.setState({ nb_adult : this.state.nb_adult + 1 })
            else if (this.state.nb_adult>0)      
                      this.setState({ nb_adult : this.state.nb_adult - 1 })
            e.preventDefault()

          } else if( content_previos_element===' Children ' ) {

            if (valeur===' + ')    this.setState({ nb_child : this.state.nb_child + 1 })
            else if (this.state.nb_child>0)      
                     this.setState({ nb_child : this.state.nb_child - 1 })
            e.preventDefault()

          } else if( content_previos_element ===' Rooms ' ) {

            if (valeur===' + ')    this.setState({ nb_room : this.state.nb_room + 1 })
            else if (this.state.nb_room>0)       
                     this.setState({ nb_room : this.state.nb_room - 1 })
            e.preventDefault()

          }

         

      }

      render(){
          return <div className="spe_compo">
          <div> 
                    <p className='adult'> Adult </p>
                    <p> 
                         <a href='#' onClick={this.handle.bind(this)}> - </a>
                         <span> {this.state.nb_adult} </span>
                         <a href='#' onClick={this.handle.bind(this)}> + </a>    
                    </p>
          </div>

    <div>
         <p> Children </p>
         <p> 
         <a href='#' onClick={this.handle.bind(this)}> - </a>
         <span> {this.state.nb_child} </span>
         <a href='#' onClick={this.handle.bind(this)}> + </a>      
         </p>   
    </div>
    <div>
        <p> Rooms </p>
           <p> 
               <a href='#' onClick={this.handle.bind(this)} > - </a>
               <span> {this.state.nb_room} </span>
               <a href='#' onClick={this.handle.bind(this)} > + </a>      
           </p>
    </div>
</div>
      }

}

export default SpecialCompo2