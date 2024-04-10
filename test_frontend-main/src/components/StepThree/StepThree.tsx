import React, { FC } from 'react';
import styles from './StepThree.module.scss';
import { useTranslation } from 'react-i18next';

import Success from '../../assets/img/success.png';


const StepThree: FC = () => {
    const {t} = useTranslation();

    return (
       <div className={styles.stepThree}>
            <img src={Success} alt={t("success")}></img>
            <div className={styles.stepThree__SuccessText}>
                <h5>{t("accountCreated")}</h5>
                <p>{t("stepThreeLipsum")}</p>
            </div>
        </div>
    );
}

export default StepThree;