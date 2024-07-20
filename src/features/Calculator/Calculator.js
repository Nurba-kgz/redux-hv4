import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    digitPressed,
    operatorPressed,
    calculateResult,
    clear,
} from '../calculatorSlice/CalculatorSlice';

const Calculator = () => {
    const dispatch = useDispatch();
    const { value } = useSelector(state => state.calculator);

    const handleDigitClick = digit => {
        dispatch(digitPressed(digit));
    };

    const handleOperatorClick = operator => {
        dispatch(operatorPressed(operator));
    };

    const handleEqualsClick = () => {
        dispatch(calculateResult());
    };

    const handleClearClick = () => {
        dispatch(clear());
    };

    return (
        <div className="calculator">
            <input type="text" value={value} readOnly />
            <div>
                <button onClick={() => handleDigitClick(1)}>1</button>
                <button onClick={() => handleDigitClick(2)}>2</button>
                <button onClick={() => handleDigitClick(3)}>3</button>
                <button onClick={() => handleOperatorClick('+')}>+</button>
            </div>
            <div>
                <button onClick={() => handleDigitClick(4)}>4</button>
                <button onClick={() => handleDigitClick(5)}>5</button>
                <button onClick={() => handleDigitClick(6)}>6</button>
                <button onClick={() => handleOperatorClick('-')}>-</button>
            </div>
            <div>
                <button onClick={() => handleDigitClick(7)}>7</button>
                <button onClick={() => handleDigitClick(8)}>8</button>
                <button onClick={() => handleDigitClick(9)}>9</button>
                <button onClick={() => handleOperatorClick('*')}>*</button>
            </div>
            <div>
                <button onClick={() => handleDigitClick(0)}>0</button>
                <button onClick={() => handleEqualsClick()}>=</button>
                <button onClick={() => handleClearClick()}>C</button>
                <button onClick={() => handleOperatorClick('/')}>/</button>
            </div>
        </div>
    );
};

export default Calculator;