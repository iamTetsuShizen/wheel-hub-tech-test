import React, { FC, useContext } from 'react';
import styles from './Control.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Context } from '../../context';


const Control: FC = () => {
    const {step, setStep, validations} = useContext(Context);

    const isNext = step === 1 || step === 2;
    const isPrevious = step === 2 || step === 3;

    const isDisabled = step === 1 && !validations.stepOne  || step === 2 && !validations.stepTwo;


    const previous = () => {
        if (step > 1) setStep(step-1)
    }
    const next = () => {
        if (step < 3) setStep(step+1)
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