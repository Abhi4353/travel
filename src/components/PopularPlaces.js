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
                        <p>We all are here to do a lot of bakchodi and let i introduce my friends with you.</p>
                             </div>
                     </div>
                     <div className='row'>
                        <div className='container-fluid'>
                        <div className='popular-places-images'>
                          <div className='row'>
                            
                            <div className='col-md-6 col-lg-4 col-sm-12 col-xs-4'>
                              <div className='popular-places-div'>
                              <Link to={pic1} target='_blank'><img src={pic1} alt='pic' /></Link>
                                 </div>
                            </div>
                            <div className='col-md-6 col-lg-4 col-sm-12 col-xs-4'>
                            <div className='popular-places-div'>
                            <Link to={pic2} target='_blank'><img src={pic2} alt='pic' /></Link>
                                 </div>
                            </div>
                            <div className='col-md-6 col-lg-4 col-sm-12 col-xs-4'>
                            <div className='popular-places-div'>
                            <Link to={pic3} target='_blank'><img src={pic3} alt='pic' /></Link>
                                 </div>
                            </div>
                          
                            <div className='col-md-6 col-lg-4 col-sm-12 col-xs-4'>
                            <div className='popular-places-div'>
                            <Link to={pic4} target='_blank'><img src={pic4} alt='pic' /></Link>
                                 </div>
                            </div>
                            <div className='col-md-6 col-lg-4 col-sm-12 col-xs-4'>
                            <div className='popular-places-div'>
                            <Link to={pic5} target='_blank'><img src={pic5} alt='pic' /></Link>
                                 </div>
                            </div>
                            <div className='col-md-6 col-lg-4 col-sm-12 col-xs-4'>
                            <div className='popular-places-div'>
                                 <Link to={pic6} target='_blank'><img src={pic6} alt='pic' /></Link>
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
