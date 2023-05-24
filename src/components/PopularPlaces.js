import React from 'react'
import { Link } from 'react-router-dom'
import pic1 from '../images/pic1.jpg'
import pic2 from '../images/pic2.jpg'
import pic3 from '../images/pic3.jpg'
import pic4 from '../images/pic4.jpg'
import pic5 from '../images/pic5.jpg'
import pic6 from '../images/pic6.jpg'

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
