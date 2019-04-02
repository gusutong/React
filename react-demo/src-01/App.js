import React, { Fragment,Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

class App extends Component{
  constructor(props) {
    //console.log(this);
    super(props);
    // console.log(this.props);
    this.state = {
      course: 'React',
      time: new Date().toLocaleString()
    };
    console.log('constructor');
   // this.handleClick = this.handleClick.bind(this);
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    return null;
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    console.log('shouldComponentUpdate');
    // if(nextProps.wd === this.props.wd){
    //   return false;
    // }
    return true;// 当返回true时render才会调用
  }
  getSnapshotBeforeUpdate(){
    console.log('getSnapshotBeforeUpdate');
    return 1;
  }
  componentDidUpdate(prevProps,prevState,a){
    console.log('componentDidUpdate');
    console.log(a);
  }
  
  componentDidMount(){
    // setInterval(() => {
    //   this.setState({
    //     time: new Date().toLocaleString()
    //   })
    // }, 1000);
    // console.log('componentDidMount');
  }
  handleClick = (id,e) =>{
      //console.log('click');
      console.log(e);
      setInterval(() => {
        this.setState({
          time: new Date().toLocaleString()
        })
      }, 1000);
  }
  
  render() {
    //console.log('render');
    // console.log(this.props);
    return ( <Fragment>
      <p> {this.state.time} </p> 
      <button onClick={ this.handleClick.bind(this,100)}>开始</button>
      </Fragment>
    )
  }
}

export default App;