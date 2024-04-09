import React, { FC, LegacyRef, MouseEventHandler, ReactElement, useRef } from 'react';
import styles from './Input.module.scss';
import ErrorInterface from '../../types/error';

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

const Input: FC<InputProps> =  ({ label, tooltip, inline , inverted, onChange, error, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className={`${styles.input} ${inline && styles.inline} ${inverted && styles.inverted}`}>
            <label className="">{label}{tooltip}</label>
            <input
                ref={inputRef}
                className={ error?.isError ? styles.error : ""} 
                onChange={(e) => {
                    onChange?.(e.target.value);
                }}
                
                {...rest}
            />
            {error?.isError && <span> {error?.message }</span>}
            {rest.maxlength && <span className={styles.input__counter}> {inputRef.current?.value.length}/{rest.maxlength}</span>}
        </div>
    );
}

export default Input;