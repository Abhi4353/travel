import React, { useState } from 'react'

const Numbers = () => {
    const[display,setDisplay]=useState(false)
    const[count,setCount]=useState()
    const[table]=useState([0,0])
    const[num,setNum]=useState()
    const[result,setResult]=useState()
    const incrementcount = async() => {
       setDisplay(true)
       for(let i=1;i<=10;i++){
        const number =parseInt(count, 10);
        setNum(i)
        setResult(number*i)
       console.log(num,<br></br>,result)
       }
    }
   
  return (
    <div className='container w-50 bg-light text-primary'>
        <div className='row'>
          <div className='col'>
            <div className='form-group'>
             <label className='form-label mt-2'>Enter a number</label>
             <input type='text' onChange={(e)=>setCount(e.target.value)} className='form-control'/>
             <button onClick={incrementcount} type='button' className='btn btn-primary m-2'>Generate Table</button><br/>
            {display? <>{count}*{num}={result}</> : ""}
            {table.map((ele,key)=>(
              <><div key={key}>{ele.num}{ele.result}</div></>
            ))}
             </div>
          </div>
        </div>
    </div>
  )
}

export default Numbers
