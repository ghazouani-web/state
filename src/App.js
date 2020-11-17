import './App.css';
import React from 'react';
class App extends React.Component {

  state ={
    imgSrc  :  <img src="/toff.jpg" /> ,


      fullName :  " chayma  ghazouani " , 
      bio : "bio" , 
      profession : "devlopper ",
      isChecked : true ,
      digit:0,

    };  

    componentDidMount = () =>{
      setInterval(()=>{
        this.setState(prevState=>({digit : prevState.digit +1 ,}));
      },1000);
    } ;
  
     

    handelClick =()=>this.setState({isChecked : !this.state.isChecked})
  render(){
     return (
     <React.Fragment>
    <button onClick={this.handelClick }> click me </button>
     { this.state.isChecked && ( <div id="myDIV" >
     <h1> {this.state.fullName}</h1>
     <h1> {this.state.bio}</h1>
     <h1> {this.state.imgSrc}</h1>
     <h1> {this.state.profession}</h1>
     </div>)}

     <span> counter : {this.state.digit}</span>

     </React.Fragment>

          


            

  );
}

}
export default App;