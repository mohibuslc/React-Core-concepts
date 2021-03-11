import logo from './logo.svg';
import './App.css';

// Component Declare Dynamic 

function App() {
  const familymember =['Father (Sha .Md Samir Ali)','Mother(Razia Begum)','Atahur Rahman','Ayesha Begum']
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p ><u>I m React Person .</u></p>
        
        
        <Person name= {familymember[0]} food ="Kicuri"></Person>
        <Person name ={familymember[1]} food = " FISH"></Person>
        <Person name = {familymember[2]} food = "BUNA Curry "></Person>
        <Person name = {familymember[3]} food = "Burgur"> </Person>
      </header>
    </div>
  );

   
}
// component Declare Dynamic : 

function Person(props){

  const island = {
    
    border: '2px solid red',
    margin: '10px'

  }

 return(  
 <div style={island}>  
  <p> Name:{props.name}</p>
  <p>Most Like Food : {props.food}</p>
 <h3>Award of The Year 2021 </h3> 
 </div>
 )

}

export default App;
