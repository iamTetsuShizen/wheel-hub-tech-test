import React, { FC, useContext } from 'react';
import styles from './StepOne.module.scss';

import { Context } from '../../context';
import Input from '../Input';

import WheelHubLogo from '../../assets/img/Logotipo-Vertical-Verde-Alta.png';

const StepOne: FC = () => {
    const {validations, setValidations} = useContext(Context);


    return (
       <div className={styles.stepOne}>
            <h1 className={styles.stepOne__Title}>Test Frontend Wheel Hub</h1>
            <hr className={styles.stepOne__Separator}/>
            <img src={WheelHubLogo} className={styles.stepOne__Logo} alt={"Wheel Hub logo"} />
            <h6>¿Qué deberá realizar?</h6>
            <p>
                En la primera pestaña, deberá confirmar que es mayor de edad y que acepta el tratamiento de sus datos según la política de datos vigentes.
            </p>
            <p>
                En la segunda pestaña, deberá crear un usuario, una contraseña y una pista para recordar la contraseña (como dato opcional).
            </p>
            <p>
                En tercer lugar, deberá visualizarse el mensaje de éxito de creación.
            </p>
            <form >
                <Input 
                type="checkbox" 
                id="stepOneCheckbox" 
                label="Confirmo que es mayor de edad, y acepta el tratamiento de sus datos según al política de protección de datos vigente." 
                inverted 
                inline
                onClick={()=> {
                    setValidations({
                        stepOne: true,
                        stepTwo: false
                    });
                 }}
                />
            </form>
       </div>
    );
}

export default StepOne;