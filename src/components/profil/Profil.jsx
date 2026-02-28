import { useState } from 'react';
import './Profil.css'
import Footer from '../footer/Footer.jsx'

export default function Profil() {

    const [isPrivate, setPrivate] = useState(null) // move to App.jsx when login is implemented
    // const [levelFrame, setLevelFrame] = useState(null)
    const [portrait, setPortrait] = useState(null)
    const [username, setUsername] = useState(null)
    const [level, setLevel] = useState(null)
    const [endorsement, setEndorsement] = useState(null)
    const [starImg, setStarImg] = useState(null)
    // tank
    const [rankImageTank, setRankImgTank] = useState(null)
    const [tierImageTank, setTierImageTank] = useState(null)
    const [rankTank, setRankTank] = useState(null)
    const [tierTank, setTierTank] = useState(null)
    // damage
    const [rankImageDps, setRankImgDps] = useState(null)
    const [tierImageDps, setTierImagesDps] = useState(null)
    const [rankDps, setRankDps] = useState(null)
    const [tierDps, setTierDps] = useState(null)
    // support
    const [rankImageSup, setRankImgSup] = useState(null)
    const [tierImageSup, setTierImagesSup] = useState(null)
    const [rankSup, setRankSup] = useState(null)
    const [tierSup, setTierSup] = useState(null)





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
                            <div className='rank'>
                                <img src={rankImageTank} alt={rankTank} />
                                <img src={tierImageTank} alt={tierTank} />
                            </div>


                            <img src='roles/damage.svg' alt='damage' />
                            <div className='rank'>
                                <img src={rankImageDps} alt={rankDps} />
                                <img src={tierImageDps} alt={tierDps} />
                            </div>

                            <img src='roles/support.svg' alt='support' />
                            <div className='rank'>
                                <img src={rankImageSup} alt={rankSup} />
                                <img src={tierImageSup} alt={tierSup} />
                            </div>
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