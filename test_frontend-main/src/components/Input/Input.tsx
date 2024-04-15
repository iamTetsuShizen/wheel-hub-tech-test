import React, { FC, MouseEventHandler, MouseEvent, ReactElement, useRef, useState } from 'react';
import styles from './Input.module.scss';
import ErrorInterface from '../../types/error';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface InputProps {
    type: string;
    label?: string;
    value?: string;
    id?: string;
    placeholder?: string;
    required?: boolean;
    tooltip?: ReactElement;
    inverted?: boolean;
    inline?: boolean;
    onClick?: MouseEventHandler;
    onChange?: Function;
    error?: ErrorInterface;
    maxlength?: string;
}

const Input: FC<InputProps> =  ({ type, label, tooltip, inline , inverted, onChange, error, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const {t} = useTranslation();

    const isPassword = type === 'password';
    const  [passwordVisibility, setPasswordVisibility ] = useState(false);

    return (
        <div className={`${styles.input} ${inline && styles.inline} ${inverted && styles.inverted}`}>
            <label className="">{label}{tooltip}</label>
            <div className={styles.input__inputContainer}>
                <input
                    type= {passwordVisibility ? 'text' : type}
                    ref={inputRef}
                    className={ error?.isError ? styles.error : ""} 
                    onChange={(e) => {
                        onChange?.(e.target.value);
                    }}
                    
                    {...rest}
                />
                {isPassword && <button className={styles.input__toggleVisibility} onClick={ (ev : MouseEvent) => {
                        ev.preventDefault();
                        setPasswordVisibility(!passwordVisibility)
                    }}><FontAwesomeIcon icon={ passwordVisibility ? faEyeSlash : faEye} /></button>}
            </div>
            {error?.isError && <span className={styles.errorText}> {t(error?.message) }</span>}
            {rest.maxlength && <span className={styles.input__counter}> {inputRef.current?.value.length}/{rest.maxlength}</span>}
        </div>
    );
}

export default Input;