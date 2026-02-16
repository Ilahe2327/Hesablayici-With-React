import React from 'react'

function Numbers({onNumberClick , onDecimal , onEquals}) {
  return (
   <div className="numbers">
          <div>
          {["7","8","9"].map(n => (
          <button key={n} className='number' onClick={() => onNumberClick(n)}>{n}</button>
        ))}
          </div>
          <div>
          {
            ["4","5","6"].map(n=>(
                <button  key={n} className='number' onClick={()=> onNumberClick(n)}>{n}</button>
            ))
          }
          </div>
          <div>
           {["1","2","3"].map(n=>(
            <button  key={n} className='number' onClick={()=>onNumberClick(n)}>{n}</button>
           ))}
          </div>
          <div>
             <button type="button" onClick={()=>onNumberClick("0")} className="number">0</button>
            <button onClick={onDecimal} value="." className="decimal">.</button>
            <button onClick={onEquals} value="=" className="equals">=</button>
          </div>
        </div>
  )
}

export default Numbers