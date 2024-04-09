import React, { FC } from 'react';
import styles from './StepThree.module.scss';

import Success from '../../assets/img/success.png';


const StepThree: FC = () => {
    return (
       <div className={styles.stepThree}>
            <img src={Success} alt="success"></img>
            <div className={styles.stepThree__SuccessText}>
                <h5>¡La cuenta se creó correctamente!</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vestibulum, magna quis scelerisque consectetur, libero enim sollicitudin dolor, at tincidunt eros quam laoreet dolor. Praesent facilisis justo erat, quis mollis sapien malesuada elementum. Cras et sem ut nibh ullamcorper euismod. Integer pretium suscipit eleifend. Donec consequat posuere leo, sed finibus leo egestas non. Donec ac arcu sed elit suscipit viverra.</p>
            </div>
        </div>
    );
}

export default StepThree;