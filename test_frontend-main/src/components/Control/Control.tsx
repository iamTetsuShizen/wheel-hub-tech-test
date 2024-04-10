import React, { FC, useContext } from 'react';
import styles from './Control.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Context } from '../../context';
import UserInterface from '../../types/user';
import ErrorInterface from '../../types/error';

const registerUser = async (user: UserInterface) : Promise<ErrorInterface> => {

    // comprova contrassenyes, or error
    if (user.password !== user.confirmPassword) {
        return {
            isError: true,
            message: "Make sure the password and the confirmPasword fields are equal"
        }
    }

    //fetch
    const url = 'test';

    const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
      });

    // check resposta, enviar error o 
    
    //await response.json();

    console.log(response);

    if (response.status !== 200) {
        return {
            isError: true,
            message: "Something went wrong"
        }
    }

    return {
        isError: false,
        message: ""
    }
}


const Control: FC = () => {
    const {step, setStep, validations, user} = useContext(Context);

    const isNext = step === 1 || step === 2;
    const isPrevious = step === 2 || step === 3;

    const isDisabled = step === 1 && !validations.stepOne  || step === 2 && !validations.stepTwo;


    const previous = () => {
        if (step > 1) setStep(step-1)
    }
    const next = async () => {
        if (step === 1) setStep(2)
        if (step === 2) {
            const response = await registerUser(user);
            if(response.isError) {
                alert(response.message);
                return;
            }

            setStep(3);
        }
    }
    const start = () => {
        setStep(1)
    }

    return (
        <div className={styles.control}>
            
            {isPrevious && 
                <button 
                    onClick={previous} 
                    className={styles.control__previous}
                >
                    Atras 
                </button>}

            {isNext && 
                <button 
                    onClick={next}
                    className={styles.control__next}
                    disabled={isDisabled}

                >
                    Siguiente <FontAwesomeIcon icon={faChevronRight} />
                </button>}

            {step === 3 &&
                <button 
                    onClick={start}
                    className={styles.control__start}
                > 
                    A inicio
                </button>}
        </div>
    );
}

export default Control;