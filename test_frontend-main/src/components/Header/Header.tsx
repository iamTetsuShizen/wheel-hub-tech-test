import React, { FC } from 'react';
import styles from './Header.module.scss';

interface HeaderProps {
    step: number;
}

const Header: FC<HeaderProps> =  ({ step }) => {
    return (
        <header className={styles.header}>
            <div className={styles.header__steps}>
                <div className={`${styles.header__step} ${styles.circle}`}>1</div>
                <div className={`${styles.header__step} ${styles.circle}`}>2</div>
                <div className={`${styles.header__step} ${styles.circle}`}>3</div>
                <div className={styles.header__progressLine}></div>
            </div>
        </header>
    );
}

export default Header;