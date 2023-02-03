import React, { useState } from 'react';
import './App.css';
import User from './User'


function App() {

  const users = [
    {
      name: 'John',email: 'john@example.com',contact:123
    },
    {
      name: 'Sam',email: 'sam@example.com',contact:456
    },
    {
      name: 'Rex',email: 'rex@example.com',contact:789
    },
    {
      name: 'Kat',email: 'kat@example.com',contact:121
    }
  ]

  return (
    <div className="App">
        <h1>Reuse Component in Loop</h1>
        {
          users.map((user,i)=> 
          <User data={user} />

          )
        }
    </div>
  )
}

export default App;

// ######################7) Props with Class Component:-Props are used store data and to pass data.##################
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       name:"anil"
//     }
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>Props</h1>
//         <Student name={this.state.name} email="anil@gmail.com" />
//         <button onClick={()=>this.setState({name:"Ankit"})}>Update Name</button>
//       </div>
//     );
//   }
// }

//##8)////////////////////////Get Input Box Value(below is code)////////////////////////////////////////////////////////
// import React, { useState } from 'react';
// import './App.css';


// function App() {
//   const [data, setData] = useState(null)
//   const [print, setPrint] = useState(false)

//   function getData(val) {
//     console.log(val.target.value);
//     setData(val.target.value)
//   }

//   return (
//     <div className="App">
//       {
//         print ?
//           <h1>{data}</h1>
//           : null
//       }

//       <input type="text" onChange={getData} />
//       <button onClick={()=> setPrint(true)}> Print Data</button>
//     </div>
//   )
// }

// export default App;

//####################### 9)Hide and Show Element////////////////////////////////////////
// function App() {
//   const [status,setStatus] = useState(true)
  
//   return (
//     <div className="App">
//       {
//         status?<h1>Hide and Show Element</h1>:null
//       }
      
//       <button onClick={()=> setStatus(false)}>Hide</button>
//       <button onClick={()=> setStatus(true)}>Show</button>
//     </div>
//   )
// }

//############################# 10) Form Handling//////////////////////////////////////////
// function App() {

//   const [name,setName] = useState('')
//   const [tnc,setTnc] = useState(false)
//   const [interest,setInterest] = useState('')


//   function getFormData(e){
//     console.log(name,tnc,interest);
//     e.preventDefault();
//   }
  
//   return (
//     <div className="App">
//         <h1>Form Handling</h1>
//         <form onSubmit={getFormData}>
//           <input type="text" placeholder="Enter Name" onChange={(e)=> setName(e.target.value)} /> <br/> <br/>
//           <select onChange = {(e)=> setInterest(e.target.value)}>
//           <option>Select option</option>
//             <option>Marvel</option>
//             <option>DC</option>
//             <option>WB</option>
//           </select> <br/> <br/>
//           <input type="checkbox" onChange = {(e)=> setTnc(e.target.checked)}/><span>Accept Terms and conditions</span>
//           <br/> <br/>
//           <button type="submit">Submit</button>
//         </form>
//     </div>
//   )
// }
