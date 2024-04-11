import React, { useContext, useState } from 'react';

import Img1 from './assets/img/screenshots/1.jpg';
import Img2 from './assets/img/screenshots/2.jpg';
import Img3 from './assets/img/screenshots/3.jpg';
import Img4 from './assets/img/screenshots/4.jpg';
import Img5 from './assets/img/screenshots/5.jpg';
import Img6 from './assets/img/screenshots/6.jpg';
import Img7 from './assets/img/screenshots/7.jpg';
import Img8 from './assets/img/screenshots/8.jpg';

import './App.scss';
import { Context } from './context';

import Header from './components/Header';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import Control from './components/Control';

export default function App () {
    const {step, setStep} = useContext(Context);

    return (
      <div className="app">
        <main className="app-content vh-100">
            <Header />
            <section className="widget">
                <div className={`widget__step ${step === 1 ? "active" : ""}`}>
                    <StepOne />
                    <hr/>
                    <Control />
                </div>
                <div className={`widget__step ${step === 2 ? "active" : ""}`}>
                    <StepTwo />
                    <hr/>
                    <Control />
                </div>
                <div className={`widget__step ${step === 3 ? "active" : ""}`}>
                    <StepThree />
                    <hr/>
                    <Control />
                </div>
            </section>
        </main>
      </div>
    )
}
