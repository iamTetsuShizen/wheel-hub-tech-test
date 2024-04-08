import React, { FC, ReactElement } from 'react';
import styles from './Input.module.scss';

interface InputProps {
    label: string;
    type: string;
    id: string;
    placeholder?: string;
    required?: boolean;
    tooltip?: ReactElement;
}

const Input: FC<InputProps> =  ({ label, tooltip, ...rest }) => {
    return (
        <div className={styles.input}>
            <label className="">{label}{tooltip}</label>
            <input {...rest} className=""></input>
        </div>
    );
}

export default Input;