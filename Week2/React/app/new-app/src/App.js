import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import friends from './images/friends.jpg'
import HTGAWM from './images/HTGAWM.jpg'
import Child from './component/child'


class App extends Component {
  state = {
    count: 0,
    show: true,
    img: [HTGAWM,friends],
  };
  componentDidMount(){
    console.log('componentDidMount')
  }
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
  // decrease=()=>{
  //   this.setState({count:--this.state.count})
  // }
  // incraese=()=>{
  //   this.setState({count:++this.state.count})
  // }
  // showTrue=()=>{
  //   this.setState({show:true})
  // }
  // showFalse=()=>{
  //   this.setState({show:false})
  // }
  nexImg = () => {
    if (this.state.count < this.state.img.length-1) {
      this.setState({ count: ++this.state.count });
    }else{
      this.setState({count:0})
    }
  };
  toggleShow=()=>{
     this.setState({show:false})
  }
  render() {
    return (
      <div >
        {/* <h1>Hello Class {this.props.name}</h1> */}
        {/* <h1>Counter: {this.state.count}</h1>
        <button onClick={this.decrease}>decrease</button>
        <button onClick={this.incraese}>incraese</button>
        {this.state.show? <h4>yes</h4>: <h4>No</h4>}
        <button onClick={this.showFalse}>No</button>
        <button onClick={this.showTrue}>yes</button> */}
        <div className="img">
        <img src={this.state.img[this.state.count]}/>
        <button onClick={this.nexImg}>Next</button>
        </div>
        {this.state.show? <Child/> : null}
        <button onClick={this.toggleShow}>Toggle</button>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//  <h1> hello function {props.name}</h1>
//     </div>
//   );
// }

export default App;
