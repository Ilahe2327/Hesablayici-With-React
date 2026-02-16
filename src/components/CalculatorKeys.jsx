import React from 'react'
import Numbers from './Numbers'
import Operator from './Operator'

export default function CalculatorKeys({onNumberClick,onDecimal,onEquals,onOperatorClick}) {
  return (
      <div className="calculator-keys">
       <Numbers onNumberClick={onNumberClick}
                onDecimal={onDecimal}
                onEquals={onEquals} />

       <Operator onOperatorClick={onOperatorClick} />
      </div>
  )
}
