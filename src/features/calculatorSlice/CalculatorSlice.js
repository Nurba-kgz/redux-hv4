import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: '0',
    operator: null,
    waitingForOperand: false,
};

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        digitPressed(state, action) {
            const digit = action.payload;
            if (state.waitingForOperand) {
                state.value = String(digit);
                state.waitingForOperand = false;
            } else {
                state.value = state.value === '0' ? String(digit) : state.value + digit;
            }
        },
        operatorPressed(state, action) {
            const operator = action.payload;
            state.operator = operator;
            state.waitingForOperand = true;
        },
        calculateResult(state) {
            const { value, operator } = state;
            const operand = parseFloat(value);
            switch (operator) {
                case '+':
                    state.value = String(operand + operand);
                    break;
                case '-':
                    state.value = String(operand - operand);
                    break;
                case '*':
                    state.value = String(operand * operand);
                    break;
                case '/':
                    state.value = String(operand / operand);
                    break;
                default:
                    return;
            }
            state.operator = null;
            state.waitingForOperand = true;
        },
        clear(state) {
            state.value = '0';
            state.operator = null;
            state.waitingForOperand = false;
        },
    },
});

export const { digitPressed, operatorPressed,
    calculateResult, clear } = calculatorSlice.actions;

export default calculatorSlice.reducer;