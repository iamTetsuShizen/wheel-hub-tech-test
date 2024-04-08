import React, { FC, createContext, useState } from 'react';
import StepOne from '../components/StepOne';

const initialState: ContextInterface = {
    step: 1,
    setStep: () => {},
    validations: {
        stepOne: false,
        stepTwo: false
    },
    setValidations: () => {}
}

interface ValidationInterface {
    stepOne: boolean;
    stepTwo: boolean;
}

interface ContextInterface {
    step: number;
    setStep: (number:number) => void;
    validations: ValidationInterface;
    setValidations: (validation:ValidationInterface) => void;
}

const Context = createContext<ContextInterface>(initialState);

const ContextProvider : FC = ({ children }) => {
    const [step, setStep] = useState<number>(initialState.step);

    const [validations, setValidations] = useState<ValidationInterface>(initialState.validations);

    return (
        <Context.Provider value={{
            step,
            setStep,
            validations,
            setValidations
        }}>
            {children}
        </Context.Provider>
    );
};

export {Context, ContextProvider};