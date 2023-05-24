import React from 'react'
import { Link } from 'react-router-dom'
import shilpa1 from '../images/shilpa1.jpeg'
import shilpa2 from '../images/shilpa2.jpeg'
import shilpa3 from '../images/shilpa3.jpeg'
import shilpa4 from '../images/shilpa4.jpeg'
import shilpa5 from '../images/shilpa5.jpeg'
import shilpa6 from '../images/shilpa6.jpeg'

const PopularPlaces = () => {
  return (
 <>
 <div className='container-fluid'>
    <div className='row'>
        <div color='col-md-12 col-sm-12 col-xs-12'>
            <div className='container-fluid popular-places'>
               <div className='row'>
                 <div className='col-md-12 col-sm-12 col-xs-12'>
                     <div className='container'>
                       <div className='row'>
                        <div className='popular-places-title'>
                         <p>Friends</p>
                         </div>
                       </div>
                       <div className='row'>
                        <div className='popular-places-para'>
                        <p>This is Shilpa My jaanu shilpa love you.</p>
                             </div>
                     </div>
                     <div className='row'>
                        <div className='container-fluid'>
                        <div className='popular-places-images'>
                          <div className='row'>
                            
                            <div className='col-md-6 col-lg-4 col-sm-12 col-xs-4'>
                              <div className='popular-places-div'>
                              <Link to={shilpa1} target='_blank'><img src={shilpa1} alt='pic' /></Link>
                                 </div>
                            </div>
                            <div className='col-md-6 col-lg-4 col-sm-12 col-xs-4'>
                            <div className='popular-places-div'>
                            <Link to={shilpa2} target='_blank'><img src={shilpa2} alt='pic' /></Link>
                                 </div>
                            </div>
                            <div className='col-md-6 col-lg-4 col-sm-12 col-xs-4'>
                            <div className='popular-places-div'>
                            <Link to={shilpa3} target='_blank'><img src={shilpa3} alt='pic' /></Link>
                                 </div>
                            </div>
                          
                            <div className='col-md-6 col-lg-4 col-sm-12 col-xs-4'>
                            <div className='popular-places-div'>
                            <Link to={shilpa4} target='_blank'><img src={shilpa4} alt='pic' /></Link>
                                 </div>
                            </div>
                            <div className='col-md-6 col-lg-4 col-sm-12 col-xs-4'>
                            <div className='popular-places-div'>
                            <Link to={shilpa5} target='_blank'><img src={shilpa5} alt='pic' /></Link>
                                 </div>
                            </div>
                            <div className='col-md-6 col-lg-4 col-sm-12 col-xs-4'>
                            <div className='popular-places-div'>
                                 <Link to={shilpa6} target='_blank'><img src={shilpa6} alt='pic' /></Link>
                                 </div>
                            </div>
                          </div>
                          </div>
                        </div>
                     </div>
                     </div>
                 </div>
               </div>
            </div>
        </div>
    </div>
 </div>
 </>
  )
}

export default PopularPlaces
