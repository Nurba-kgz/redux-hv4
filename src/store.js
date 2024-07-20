import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './features/calculatorSlice/CalculatorSlice';

export default configureStore({
    reducer: {
        calculator: calculatorReducer,
    },
});