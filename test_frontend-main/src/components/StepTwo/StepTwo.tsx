import React, { FC, useContext, useEffect, useState } from 'react';
import styles from './StepTwo.module.scss';

import { Context } from '../../context';
import  validateUsername from '../../helpers/usernameValidator';
import  validatePassword  from '../../helpers/passwordValidator';
import Input from '../Input';
import ErrorInterface from '../../types/error';

interface InputValidationInterface {
    username: ErrorInterface;
    password: ErrorInterface;
    confirmPassword: ErrorInterface;
}

const StepTwo: FC = () => {
    const {validations, setValidations} = useContext(Context);

    const [inputValidations, setInputValidations] = useState<InputValidationInterface>({
        username: {
            isError: null,
            message: ""
        },
        password: {
            isError: null,
            message: ""
        },
        confirmPassword: {
            isError: null,
            message: ""
        }
    });
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [clue, setClue] = useState<string>("");

    useEffect(()=> {
        let isValid = true;

        for (let validation of Object.values(inputValidations)) {
            isValid = isValid && (validation.isError === false)
        }

        console.log(isValid);
        console.log()

        setValidations({
            ...validations,
            stepTwo: isValid
        });
    }, [inputValidations]);

    return (
      <div className={styles.stepTwo}>
        <h1 className={styles.stepTwo__Title}>Test Frontend Wheel Hub</h1>
        <hr className={styles.stepTwo__Separator}/>

        <form>
            <Input
                type="text"
                label="Crea tu usuario"
                placeholder="Introduce tu usuario"
                id="username"
                onChange={(value: string) => {
                    setUsername(value);
                    const isValid = validateUsername(value);
                    setInputValidations((prev) => {
                        return {
                            ...prev,
                            username: isValid
                        }
                    });
                }}
                error={inputValidations.username}
                required
            />

            <div className={styles.stepTwo__passwordContainer}>
                <Input
                    type="password"
                    label="Crea tu contraseña"
                    placeholder="Crea tu contraseña"
                    id="password"
                    onChange={(value: string) => {
                        setPassword(value);
                        const isValid = validatePassword(value);
                        setInputValidations((prev) => {
                            return {
                                ...prev,
                                password: isValid
                            }
                        });
                    }}
                    error={inputValidations.password}
                    required
                />
                <Input
                    type="password"
                    label="Repite tu contraseña"
                    placeholder="Repite tu contraseña"
                    id="confirmPassword"
                    onChange={(value: string) => {
                        setConfirmPassword(value);
                        const isValid = {
                            isError:  password !== value,
                            message:  password === value ? "" : "The passwords must be the same."
                        };
                        console.log(isValid);
                        setInputValidations((prev) => {
                            return {
                                ...prev,
                                confirmPassword: isValid
                            }
                        });
                    }}
                    error={inputValidations.confirmPassword}
                    required
                />
            </div>
            <p>También puedes crear una pista que te ayude a recordar tu contraseña.</p>
            <Input 
                type="text" 
                label="Crea tu pista para recordar tu contraseña (opcional)"
                placeholder="Introduce tu pista"
                tooltip={<i className="info align-self-right">i</i>} 
                onChange={setClue}
                maxlength="60"
            />
        </form>
      </div>
    );
}

export default StepTwo;