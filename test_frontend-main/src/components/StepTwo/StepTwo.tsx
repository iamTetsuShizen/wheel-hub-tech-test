import React, { FC, useContext, useEffect, useState } from 'react';
import styles from './StepTwo.module.scss';

import { Context } from '../../context';
import  validateUsername from '../../helpers/usernameValidator';
import  validatePassword  from '../../helpers/passwordValidator';
import Input from '../Input';
import ErrorInterface from '../../types/error';
import { useTranslation } from 'react-i18next';


interface InputValidationInterface {
    username: ErrorInterface;
    password: ErrorInterface;
    confirmPassword: ErrorInterface;
}

const StepTwo: FC = () => {
    const {validations, setValidations} = useContext(Context);
    const {t} = useTranslation();

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
        <h1 className={styles.stepTwo__Title}>{t("appTitle")}</h1>
        <hr className={styles.stepTwo__Separator}/>

        <form>
            <Input
                type="text"
                label={t("createUsername")}
                placeholder={t("addUser")}
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
                    label={t("createPassword")}
                    placeholder={t("addPassword")}
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
                    label={t("repeatPassword")}
                    placeholder={t("repeatPassword")}
                    id="confirmPassword"
                    onChange={(value: string) => {
                        setConfirmPassword(value);
                        const isValid = {
                            isError:  password !== value,
                            message:  password === value ? "" : t("errorSamePasswords")
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
            <p>{t("canAddClueText")}</p>
            <Input 
                type="text" 
                label={t("createClue")}
                placeholder={t("addClue")}
                tooltip={<i className="info align-self-right">i</i>} 
                onChange={setClue}
                maxlength="60"
            />
        </form>
      </div>
    );
}

export default StepTwo;