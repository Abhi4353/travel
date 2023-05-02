import React from 'react'
import video1 from '../videos/video1.mp4'
import { useState } from 'react'
const Video = () => {
    const[player,setPlayer]=useState(false)

    const setvideoplayer = () => {
        setPlayer(true)
    }
  return (
    <div className='container-fluid w-100'>
        <div className='row'>
            <div className='col'>
              {player ? <><div className='container-fluid videoplayer'>
               <video src={video1} className='videoplayer1' type='video/mp4' controls autoPlay />
               </div></> : 
               <div className='videoplayer-image'>
                <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-lg-12 col-sm-12 col-xs-12'>
                       <div className='videplayer-text text-center'>
                          <h1>Watch Video</h1>
                        <div className='videoplayer-icon'>
                        <p className='videoplayer-play-button' onClick={setvideoplayer}>
                          <i className='fa fa-play' aria-hidden="true"></i></p>
                          </div>
                       </div>
                    </div>
                    </div>
                </div>
               </div>} 
            </div>
        </div>
    </div>
  )
}

export default Video
