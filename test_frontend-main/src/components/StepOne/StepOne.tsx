import React, { FC, useContext } from 'react';
import styles from './StepOne.module.scss';

import { Context } from '../../context';
import Input from '../Input';

import WheelHubLogo from '../../assets/img/Logotipo-Vertical-Verde-Alta.png';
import { useTranslation } from 'react-i18next';

const StepOne: FC = () => {
    const {t} = useTranslation();
    const {validations, setValidations} = useContext(Context);

    return (
       <div className={styles.stepOne}>
            <h1 className={styles.stepOne__Title}>{t("appTitle")}</h1>
            <hr className={styles.stepOne__Separator}/>
            <img src={WheelHubLogo} className={styles.stepOne__Logo} alt={t("logoAlt")} />
            <h6>{t("whatToDo")}</h6>
            <p>{t("firstStepFirstParagraph")}</p>
            <p>{t("firstStepSecondParagraph")}</p>
            <p>{t("firstStepThirdParagraph")}</p>
            <form >
                <Input 
                type="checkbox" 
                id="stepOneCheckbox" 
                label={t("ageConsent")} 
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