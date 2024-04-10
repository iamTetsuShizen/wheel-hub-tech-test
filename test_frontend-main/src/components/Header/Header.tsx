import React, { FC, useContext } from 'react';
import styles from './Header.module.scss';
import { Context } from '../../context';

const Header: FC = () => {
    
    const {step} = useContext(Context);

    const stepStyles = [
        {
            progressLineInnerWidth: '0',
            pointerPositionLeft: '10px'
        },
        {
            progressLineInnerWidth: '50%',
            pointerPositionLeft: '100px'
        },
        {
            progressLineInnerWidth: '100%',
            pointerPositionLeft: '192px'
        }
    ];

    return (
        <header className={styles.header}>
            <div className={styles.header__steps}>
                <div className={`${styles.header__step} ${styles.circle} ${step >= 1 && styles.filled}`}>1</div>
                <div className={`${styles.header__step} ${styles.circle} ${step >= 2 && styles.filled}`}>2</div>
                <div className={`${styles.header__step} ${styles.circle} ${step >= 3 && styles.filled}`}>3</div>
                <div className={styles.header__progressLine}>
                    <div 
                    className={`${styles.header__progressLineInner} `}
                    style={{width: stepStyles[step-1].progressLineInnerWidth }}
                    >
                    </div>
                </div>

                <div 
                className={styles.header__pointer}
                style={{left: stepStyles[step-1].pointerPositionLeft}}
                >

                </div>
            </div>
        </header>
    );
}

export default Header;