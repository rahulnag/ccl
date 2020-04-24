import React, {Component,FlatList} from 'react';
import './App.css';
import Player from './Player'
import RenderPlayList from './RenderPlayList'
import SubjectList from './SubjectList'
import {HashRouter, BrowserRouter, Route} from 'react-router-dom';

class App extends React.Component{
myRef = React.createRef();
componentDidMount(){
   // this.myRef.current.f
}
render(){
  return (   
     <HashRouter ref={this.myRef} basename="/">
        {/* <RenderPlayList/> */}
        <Route exact path='/' component={SubjectList}/>
        <Route path='/subject/:subject_link' component={RenderPlayList}/>
        <Route exact path='/video/:video_id' component={Player}/> 
     </HashRouter>
  );
}
}

export default App;
