import React, {Component} from 'react';
import ReactPlayer from 'react-player'
import './App.css';
import { findDOMNode } from 'react-dom'
import screenfull from 'screenfull'



class Player extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            vid:null,
            playbackRate: 1.0,
        }
        console.log(props)
        console.log("bbbb"+this.props.match.params.video_id)
        console.log(`https://www.youtube.com/watch?v=${this.props.match.params.video_id}`);
    }
    componentDidMount(){
        this.setState({
            vid:this.props.match.params.video_id
        })
        console.log("cccc"+this.state.vid)
    }
    onClickFullscreen = () => {
        screenfull.request(findDOMNode(this.refs.player))
      }

    handleSetPlaybackRate = e => {
        this.setState({ playbackRate: parseFloat(e.target.value) })
      }  
    render(){
        return(
        <div style={{backgroundColor:'#f5f6fa'}}>
            <div style={{position: 'relative', paddingTop: '56.25%',PlayerRatio: '100 / (1280 / 720)' }}>
                <ReactPlayer
                style={{backgroundColor:'#f1f2f6',padding:'5px',position: 'absolute', top: '0', left: '0'}}
                url={`https://www.youtube.com/watch?v=${this.props.match.params.video_id}`}
                height='100%'
                width='100%'
                controls={true}
                playing={true}
                playbackRate={this.state.playbackRate}         
                />
            </div>

        <div style={{}}>
            <button class="z-depth-3"  style={{backgroundColor:'#f5f6fa',height:'50px', width:'100%',border:'1px solid #8c7ae6',marginTop:'50px',borderRadius:'30px'}} onClick={this.onClickFullscreen}>Click Here For Fullscreen</button>
            <div style={{backgroundColor:'#f5f6fa', marginTop:'20px',padding:'20px',}}>
                <p style={{margin:'5px'}}>Set Playback Speed</p>
                <button style={{backgroundColor:'#f5f6fa',marginTop:'2px',borderRadius:'30px',height:'50px', width:'50%',border:'1px solid #00a8ff'}} onClick={this.handleSetPlaybackRate} value={0.7}>0.7X</button>
                <button style={{backgroundColor:'#f5f6fa',marginTop:'2px',borderRadius:'30px',height:'50px', width:'50%',border:'1px solid #00a8ff'}} onClick={this.handleSetPlaybackRate} value={1}>1X</button>
                <button style={{backgroundColor:'#f5f6fa',marginTop:'2px',borderRadius:'30px',height:'50px', width:'50%',border:'1px solid #00a8ff'}} onClick={this.handleSetPlaybackRate} value={1.5}>1.5X</button>
                <button style={{backgroundColor:'#f5f6fa',marginTop:'2px',borderRadius:'30px',height:'50px', width:'50%',border:'1px solid #00a8ff'}} onClick={this.handleSetPlaybackRate} value={2}>2X</button>
            </div>
        </div>
        </div>
        )
    }
}


export default Player;