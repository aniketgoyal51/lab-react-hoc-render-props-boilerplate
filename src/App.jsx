import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import React,{Component} from 'react';

class App extends Component{
  render(){
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePost/>
        <LikeImage/>
      </div>
    </div>
  );
}
}
export default App;
