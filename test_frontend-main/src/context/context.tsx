import React, { FC, createContext, useState } from 'react';
import UserInterface from '../types/user';

const initialState: ContextInterface = {
    step: 1,
    setStep: () => {},
    validations: {
        stepOne: false,
        stepTwo: false
    },
    setValidations: () => {},
    user: {
        username: "",
        password: "",
        confirmPassword: "",
        clue: ""
    },
    setUser: () => {}
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
    user: UserInterface;
    setUser: (user:UserInterface) => void;
}

const Context = createContext<ContextInterface>(initialState);

const ContextProvider : FC = ({ children }) => {
    const [step, setStep] = useState<number>(initialState.step);

    const [validations, setValidations] = useState<ValidationInterface>(initialState.validations);

    const [user, setUser] = useState<UserInterface>(initialState.user);

    return (
        <Context.Provider value={{
            step,
            setStep,
            validations,
            setValidations,
            user,
            setUser
        }}>
            {children}
        </Context.Provider>
    );
};

export {Context, ContextProvider};