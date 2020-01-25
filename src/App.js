// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from '../src/testApp/components/Layout'
function App() {
  return (
    <div className="App">
      <img src={logo} width="100" height="100" className="App-logo" />
      
      
      <Layout/>
    </div>
  );
}
export default App;
