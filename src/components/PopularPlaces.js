import React from 'react'
import himachal1 from '../images/himachal1.jpg'
import himachal2 from '../images/himachal2.jpg'
import himachal3 from '../images/himachal3.jpg'
import himachal4 from '../images/himachal4.jpg'
import himachal5 from '../images/himachal5.jpg'
import himachal6 from '../images/himachal6.jpg'

const PopularPlaces = () => {
  return (
 <>
 <div className='container-fluid'>
    <div className='row'>
        <div color='col'>
            <div className='container-fluid popular-places'>
               <div className='row'>
                 <div className='col'>
                     <div className='container'>
                       <div className='row'>
                        <div className='popular-places-title'>
                         <p>Popular Destination</p>
                         </div>
                       </div>
                       <div className='row'>
                        <div className='popular-places-para'>
                        <p>Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon
                             beard words.</p>
                             </div>
                     </div>
                     <div className='row'>
                        <div className='container-fluid'>
                        <div className='popular-places-images'>
                          <div className='row'>
                            
                            <div className='col-4'>
                                 <img src={himachal1} alt='pic' />
                            </div>
                            <div className='col-4'>
                                 <img src={himachal2} alt='pic' />
                            </div>
                            <div className='col-4'>
                                 <img src={himachal3} alt='pic' />
                            </div>
                          </div><br/>
                          <div className='row'>
                            <div className='col-4'>
                                 <img src={himachal4} alt='pic' />
                            </div>
                            <div className='col-4'>
                                 <img src={himachal5} alt='pic' />
                            </div>
                            <div className='col-4'>
                                 <img src={himachal6} alt='pic' />
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
