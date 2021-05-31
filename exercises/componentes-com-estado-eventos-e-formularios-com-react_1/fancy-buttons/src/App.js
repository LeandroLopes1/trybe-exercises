import React from 'react';
import './App.css';


class App extends React.Component {
constructor() {
super()

this.state = {
  numeroDeCliques: 0,
  numeroDeCliques1: 1,
  numeroDeCliques2: 2
}
this.handleClick = this.handleClick.bind(this)
this.handleClick2 = this.handleClick2.bind(this)
this.handleClick3 = this.handleClick3.bind(this)
}
  
   handleClick =() => {
    this.setState((estadoAnterior, props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }
  
  handleClick2 = () => {
   this.setState((estadoAnterior, props) => ({
     numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 2
   }))
 }

 handleClick3 = () => {
 this.setState((estadoAnterior, props) => ({
   numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 3
 }))
}
     

  render() {
    return (
    <div>
      <button onClick={this.handleClick}>Botão 1 | Count = {this.state.numeroDeCliques}</button>
      <button onClick={this.handleClick2}>Botão 2 | Count ={this.state.numeroDeCliques1}</button>
      <button onClick={this.handleClick3}>Botão 3 | Count = {this.state.numeroDeCliques2}</button>
    </div>
    )        
  }
}

export default App;