import React, { FC, useContext } from 'react';
import styles from './StepTwo.module.scss';

import { Context } from '../../context';
import Input from '../Input';

const StepTwo: FC = () => {
    const {validations, setValidations} = useContext(Context);

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
                required
            />

            <div className={styles.stepTwo__passwordContainer}>
                <Input
                    type="password"
                    label="Crea tu contraseña"
                    placeholder="Crea tu contraseña"
                    id="password"
                    required
                />
                <Input
                    type="password"
                    label="Repite tu contraseña"
                    placeholder="Repite tu contraseña"
                    id="confirmPassword"
                    required
                />
            </div>
            <p>También puedes crear una pista que te ayude a recordar tu contraseña.</p>
            <Input type="text" label="Crea tu pista para recordar tu contraseña (opcional)" placeholder="Introduce tu pista" tooltip={<i className="info">i</i>} />
        </form>
      </div>
    );
}

export default StepTwo;