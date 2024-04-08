import React, { FC, MouseEventHandler, ReactElement } from 'react';
import styles from './Input.module.scss';

interface InputProps {
    type: string;
    label?: string;
    id?: string;
    placeholder?: string;
    required?: boolean;
    tooltip?: ReactElement;
    inverted?: boolean;
    inline?: boolean;
    onClick?: MouseEventHandler;
}

const Input: FC<InputProps> =  ({ label, tooltip, inline , inverted, ...rest }) => {
    return (
        <div className={`${styles.input} ${inline && styles.inline} ${inverted && styles.inverted}`}>
            <label className="">{label}{tooltip}</label>
            <input {...rest} className=""></input>
        </div>
    );
}

export default Input;