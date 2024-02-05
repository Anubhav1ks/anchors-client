import React, { useState } from 'react';
import Styles from './Signup.module.scss';
import Header from '../layout/header';

const OtpVerify = () => {
    const [otp, setOtp] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setOtp(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your OTP verification logic here
        console.log('OTP entered:', otp);
    };

    return (
        <div className='main'>
            <Header />
            <div className={Styles['signup-container']}>
                <h2>OTP Verification</h2>
                <p className={"mb-4"}>Enter the 6-digit OTP sent to your phone</p>
                <form onSubmit={handleSubmit}>
                    <div className={"mb-4"}>
                        <input
                            type="text"
                            value={otp}
                            onChange={handleChange}
                            maxLength="6"
                            className={`${Styles.input} ${Styles['otp-input']}`}
                        />
                    </div>
                    <div>
                        <button type="submit" className={Styles.button}>
                            Verify OTP
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OtpVerify;
