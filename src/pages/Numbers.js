import React, { useEffect, useState } from 'react'

const Numbers = () => {
    const[display,setDisplay]=useState(false)
    const[count,setCount]=useState()
    const[num,setNum]=useState()
    const[result,setResult]=useState()
    const incrementcount = async() => {
       setDisplay(true)
       const number =parseInt(count, 10);
       const number2 = parseInt(num, 10);
       setNum(number2)
       setResult(number*number)
    }
   
  return (
    <div className='container w-50 bg-light text-primary'>
        <div className='row'>
          <div className='col'>
            <div className='form-group'>
             <label className='form-label mt-2'>Enter a number</label>
             <input type='text' onChange={(e)=>setCount(e.target.value)} className='form-control'/>
             <button onClick={incrementcount} type='button' className='btn btn-primary m-2'>Generate Table</button>
            {display? <>{count}*{num}={result}</> : ""}
             </div>
          </div>
        </div>
      
    </div>
  )
}

export default Numbers
