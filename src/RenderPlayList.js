import React, {Component, Card} from 'react';
import './App.css';
import {Link} from 'react-router-dom'


class RenderPlayList extends React.Component
{
    constructor(props)
  {
    super(props);
    this.state = { 
    isLoading: false,
    dataSource: [],
  }
  }
  componentDidMount(){
    console.log("bbbb from subject"+this.props.match.params.subject_link)
    return fetch('https://rahulnag.github.io/kk/kk.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        });
      })
      .catch((error) => {
        console.error(error);
      });

      console.log(this.state.dataSource)
  }


    render(){
        return(
        <div style={{margin:0,marginTop:10, marginLeft:10, marginRight:10,}}>
      {
        this.state.dataSource.map((data, index) => {
        
        return(
          
          <div key={index} className="collection" style={{borderRadius:'30px',}}>
            
              <Link className="collection-item" style={{fontSize:'20',padding:20,}} to={`/video/${data.userId}`}>
                {data.firstName} 
              </Link>
            
          </div>
          // <Link to={`/${data.userId}`}>{data.firstName}</Link>
          )
        })
     }
    </div> 
        )
    }
}


export default RenderPlayList;