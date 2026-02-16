import React, { useState } from 'react'
import Input from './Input'
import Clear from './Clear'
import CalculatorKeys from './CalculatorKeys'
import Operator from './Operator'

function Calculator() {

  const [firstValue, setFirstValue] = useState('')
  const [secondValue, setSecondValue] = useState("");
  const [operator, setOperator] = useState('');
  const [waitingForSecondValue, setWaitingForSecondValue] = useState(false);
  const displayValue = firstValue + operator + secondValue;

  const handleNumber = (value) => {
    if (!waitingForSecondValue) {
      setFirstValue(prev => prev === '0' ? value : prev + value)
    }
    if (waitingForSecondValue) {
      setSecondValue(prev => prev ? prev + value : value)
    }
  }

  const handleDecimal = () => {
    if (waitingForSecondValue) {
      if (secondValue.includes('.')) return
      setSecondValue(prev => prev ? prev + '.' : '0.')
    }
    if (!waitingForSecondValue) {
      if (firstValue.includes('.')) return
      setFirstValue(prev => prev ? prev + '.' : '0.')
    }
  }

const ClearOne = () => {
  if (waitingForSecondValue && secondValue) {
    setSecondValue(prev => prev.slice(0, -1))
    return
  }
  if (waitingForSecondValue && !secondValue) {
    setOperator('')
    setWaitingForSecondValue(false)
    return
  }
  setFirstValue(prev => prev.slice(0, -1))
}
const clearAll = () => {
  setFirstValue("");
  setSecondValue("");
  setOperator("");
  setWaitingForSecondValue(false);
};

const calculate = () => {
  if (!firstValue || !operator || !secondValue) return;

  const a = parseFloat(firstValue)
  const b = parseFloat(secondValue)
  let result = 0;
  switch (operator) {
    case "+": result = a + b; break;
    case "-": result = a - b; break;
    case "*": result = a * b; break;
    case "/": result = a / b; break;
  }
  setFirstValue(result.toString())
  setSecondValue('')
  setOperator('')
  setWaitingForSecondValue(false)
}
const handleOperator = (op) => {
  if (!firstValue) return;
  if (operator && secondValue) return // artıq operator varsa daha bir operator yazma
  setOperator(op);
  setWaitingForSecondValue(true);
}
return (
  <div className='calculator'>
    <Input value={displayValue || "0"} />
    <Clear onClearAll={clearAll} onClearOne={ClearOne} />
    <CalculatorKeys onNumberClick={handleNumber} onDecimal={handleDecimal} onEquals={calculate} onOperatorClick={handleOperator} />
  </div>
)
}




export default Calculator