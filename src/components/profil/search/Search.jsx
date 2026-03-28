import { useState } from "react";

export default function Search() {
    const [errorText, setErrorText] = useState('');

    const handleCheckbox = (e) => {
        localStorage.setItem('PLATFORM', e.target.checked);
    }

    const submitForm = (e) => {
        let nametag = document.getElementById('nametag').value;
        const regex = /^.{3,12}#\d{4,6}$/;

        if (!regex.test(nametag)) {
            setErrorText("The nametag does not conform to the format! 'username#1234'");
            localStorage.setItem('TAG', null);
        } else {
            localStorage.setItem('TAG', nametag);

            setErrorText('');

            window.location = '/profil';
        }
    }

    return (
        <>
            <div className='profil-navbar'>
                <a href='/'>Home</a>
                <img src='overwatch.png' alt='overwatch logo' />
                <a href='https://github.com/KevinEJean/Portfolio' target='_blank'>Portfolio</a>
            </div>
            <div className='login-root'>
                <h1 id='title'>Insert a nametag to see the players profil</h1>
                <div className='username-box'>
                    <h2>Username:</h2>
                    <input
                        id='nametag'
                        type="text"
                        placeholder='username#1234'
                    />
                    <input
                        type="checkbox"
                        onChange={handleCheckbox}
                    />
                    <p>*check the box if the player is on PC</p>
                </div>
                <p id='error-prompt'>{errorText}</p>
                <button onClick={submitForm}>Submit</button>
            </div>
        </>
    );
}