import React from 'react'

function Operator({onOperatorClick}) {
    return (
            <div className="operators">
              {["+","-","*","/"].map(op=>(
                <button  key={op} className='operator' onClick={()=>onOperatorClick(op)}>{op}</button>
              ))}
            </div>
    )
}

export default Operator