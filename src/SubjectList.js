import React, {Component, Card} from 'react';
import './App.css';
import {Link} from 'react-router-dom'

class SubjectList extends React.Component
{
    constructor(props)
    {
      super(props);
      this.state = { 
      isLoading: false,
      subject: [],
    }
    }
    componentDidMount(){
      return fetch('https://rahulnag.github.io/kk/subject.json')
        .then((response) => response.json())
        .then((responseJson) => {
        console.log(responseJson)
          this.setState({
            isLoading: false,
            subject: responseJson
          });
        })
        .catch((error) => {
          console.error(error);
        });
  
        console.log(this.state.dataSource)
    }
  
  
      render(){
          return(
          <div style={{
                display:'grid', 
                width:'90%',
                margin: '8px auto',
                marginTop:'15px',
                gridTemplateColumns: ' repeat(auto-fit, minmax(150px, 1fr))',
                gridTemplateRows: 'repeat(2, 150px)',
                gridGap:'20px',
                textAlign:'center',
                alignSelf:'end',
                gridAutoRows: '150px',
                }}>
        {
            
          this.state.subject.map((data, index) => {
          
          return(
                <Link class="z-depth-3" style={{backgroundColor:'#eccc68',borderRadius:'10px',border:'1px solid black',paddingTop:'30%',fontSize:'20px', fontFamily:'Arial'}} 
                        
                        to={`/subject/${data.videoListLink}`}>
                        {data.subjectName}
                        {/* <img style= {{minHeight:'150px',maxHeight:'150px',objectFit:'fill'}} src={data.image}/> */}
                </Link>
                // </div>


        //     <div key={index} className="collection" style={{margin:0,backgroundColor:'#4a148c'}}>
            
        //       <Link className="collection-item" style={{textDecoration: 'none',fontSize:30,padding:20,backgroundColor:'#5c6bc0 '}} to={`/subject/${data.videoListLink}`}>
        //         {data.subjectName} 
        //       </Link>
            
        //   </div>
            )
          })
       }
      </div> 
          )
      }
  }
  
export default SubjectList;