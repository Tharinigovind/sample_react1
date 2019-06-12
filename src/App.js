import React,{Component} from 'react';
class App extends Component{
  constructor(){
    super();
    this.state={count:0}
    //this.handleClick=this.handleClick.bind(this);
  }
increment=()=>{
  this.setState({
    count:this.state.count + 1
  });
  }
  decrement=()=>{
    this.setState({
      count:this.state.count - 1
    });
    }

render() {
  return (
    <div>
      <span>{this.state.count}</span>
<button onClick={this.increment}>+</button>
<button onClick={this.decrement}>-</button>
</div>
  );
   }
}
export default App;
