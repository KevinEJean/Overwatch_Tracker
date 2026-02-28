import { useState } from 'react';
import './Profil.css'
import Footer from '../footer/Footer.jsx'

export default function Profil() {

    const [isPrivate, setPrivate] = useState(null) // move to App.jsx when login is implemented
    const [portrait, setPortrait] = useState(null)
    const [username, setUsername] = useState(null)
    const [level, setLevel] = useState(null) // int
    const [endorsement, setEndorsement] = useState(null) // int
    const [starImg, setStarImg] = useState(null)
    const [levelFrame, setLevelFrame] = useState(null)
    // competitive
    const [rankImageTank, setRankImgTank] = useState(null)
    const [rankTank, setRankTank] = useState(null)
    const [rankImageDps, setRankImgDps] = useState(null)
    const [rankDps, setRankDps] = useState(null)
    const [rankImageSup, setRankImgSup] = useState(null)
    const [rankSup, setRankSup] = useState(null)




    
    // API





    if (!isPrivate) {

        return (
            <div className='profil-root'>
                <div className='profil-navbar'>
                    <a href='/'>Home</a>
                    <img src='overwatch.png' alt='overwatch logo' />
                    <a href='https://github.com/KevinEJean/Portfolio' target='_blank'>Portfolio</a>
                </div>

                <div className='profil-content'>
                    <form className='profil-form'>
                        <div className='header'>
                            {/* (try to encase in levelFrame) */}
                            <img id='portrait' src={portrait} alt='portrait' />
                            <div className='user-info'>
                                <h1 id='username'>{username}</h1>
                                <div className='levels'>
                                    <h2 id='level'>Level: <b>{level}</b></h2>
                                    <h2>|</h2>
                                    <h2 id='endorsement'>Endorsement: <b>{endorsement}</b></h2>
                                    <h2>|</h2>
                                    <img src={starImg} alt='star' />
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div className='stats'>
                            <img src='roles/tank.svg' alt='tank' />
                            <img src={rankImageTank} alt={rankTank} />

                            <img src='roles/damage.svg' alt='damage' />
                            <img src={rankImageDps} alt={rankDps} />

                            <img src='roles/support.svg' alt='support' />
                            <img src={rankImageSup} alt={rankSup} />
                        </div>
                    </form>
                </div>
                {<Footer />}
            </div>
        );
    } else {
        return (
            <div className='private-player-div'>
                <a href="/">Home</a>
                <h1>This username is not associated to any public profiles.</h1>
            </div>
        );
    }
}