import { useEffect, useState } from 'react';
import './Profil.css';
import Footer from '../footer/Footer.jsx';
import fetchData from '../util/FetchData.jsx';

export default function Profil() {

    // profil
    const [username, setUsername] = useState(null);
    const [portrait, setPortrait] = useState(null);
    const [namecard, setNamecard] = useState(null);
    const [title, setTitle] = useState(null);
    const [endorsementImg, setEndorsementImg] = useState(null);
    const [endorsementLevel, setEndorsementLevel] = useState(null);
    // tank
    const [rankImageTank, setRankImgTank] = useState(null);
    const [tierImageTank, setTierImageTank] = useState(null);
    const [altRankTank, setltRankTank] = useState(null);
    const [altTierTank, setAltTierTank] = useState(null);
    // damage
    const [rankImageDps, setRankImgDps] = useState(null);
    const [tierImageDps, setTierImagesDps] = useState(null);
    const [altRankDps, setAltRankDps] = useState(null);
    const [altTierDps, setAltTierDps] = useState(null);
    // support
    const [rankImageSup, setRankImgSup] = useState(null);
    const [tierImageSup, setTierImagesSup] = useState(null);
    const [altRankSup, setAltRankSup] = useState(null);
    const [altTierSup, setAltTierSup] = useState(null);
    // open
    const [rankImageOpen, setRankImgOpen] = useState(null);
    const [tierImageOpen, setTierImagesOpen] = useState(null);
    const [altRankOpen, setAltRankOpen] = useState(null);
    const [altTierOpen, setAltTierOpen] = useState(null);
    // stats
    const [curSeason, setCurSeason] = useState(3); // needs to change dynamically
    const [timePlayed, setTimePlayed] = useState(null);
    const [gamesPlayed, setGamesPlayed] = useState(null);
    const [gamesWon, setGamesWon] = useState(null);
    const [gamesLost, setGamesLost] = useState(null);
    const [favoriteHero, setFavoriteHero] = useState(null);
    const [favoriteHeroImg, setFavoriteHeroImg] = useState('overwatch.png');
    const [favoriteHeroPlaytime, setFavoriteHeroPlaytime] = useState(0);
    // API
    const [isPlatformPC, setIsPlatformPC] = useState(localStorage.getItem('PLATFORM'));
    const playerID = localStorage.getItem('TAG');

    const DataStyler = async () => {
        try {
            const allHeroData = await fetchData(false, playerID);
            const playerData = await fetchData(true, playerID);

            console.log(playerData);

            if (!playerData || !playerData.summary) throw new Error("Not found");

            const summaryData = playerData.summary;
            const comp = isPlatformPC ? summaryData.competitive.pc : summaryData.competitive.console;

            // --- INFO ---
            setUsername(summaryData?.username);
            setPortrait(summaryData?.avatar);
            setNamecard(summaryData?.namecard);
            setTitle(summaryData?.title);
            setEndorsementImg(summaryData?.endorsement?.frame);
            setEndorsementLevel(summaryData?.endorsement?.level);

            // --- TANK ---
            setRankImgTank(comp.tank?.rank_icon);
            setTierImageTank(comp.tank?.tier_icon);
            setltRankTank(comp.tank?.division);
            setAltTierTank(comp.tank?.tier);

            // --- DAMAGE ---
            setRankImgDps(comp.damage?.rank_icon);
            setTierImagesDps(comp.damage?.tier_icon);
            setAltRankDps(comp.damage?.division);
            setAltTierDps(comp.damage?.tier);

            // --- SUPPORT ---
            setRankImgSup(comp.support?.rank_icon);
            setTierImagesSup(comp.support?.tier_icon);
            setAltRankSup(comp.support?.division);
            setAltTierSup(comp.support?.tier);

            // --- OPEN ---
            setRankImgOpen(comp.open?.rank_icon);
            setTierImagesOpen(comp.open?.tier_icon);
            setAltRankOpen(comp.open?.division);
            setAltTierOpen(comp.open?.tier);

            const statsData = isPlatformPC ? playerData.stats.pc : playerData.stats.console;

            // --- STATS ---
            setTimePlayed(statsData?.competitive?.career_stats?.['all-heroes'][2].stats[0].value);
            setGamesPlayed(statsData?.competitive?.career_stats?.['all-heroes'][2].stats[1].value);
            setGamesWon(statsData?.competitive?.career_stats?.['all-heroes'][2].stats[2].value);
            
            /* Sometime *.stats[3] is gamesTied */
            if (statsData?.competitive?.career_stats?.['all-heroes'][2].stats[3].key === 'game_tied') {
                setGamesLost(statsData?.competitive?.career_stats?.['all-heroes'][2].stats[4].value);
            } else {
                setGamesLost(statsData?.competitive?.career_stats?.['all-heroes'][2].stats[3].value);
            }

            const allHeroStats = statsData?.competitive?.career_stats;
            var curHeroPlaytime, curFavoriteHero, curFavoriteHeroPlaytime = '';
            var curFavortiteHeroImg = 'overwatch.png';

            // -- GETTING MOST PLAYED HERO OUT OF ALL OTHER HEROS
            Object.entries(allHeroStats).forEach(([heroName, heroData]) => {
                if (heroName != 'all-heroes' && heroData != null) {
                    curHeroPlaytime = heroData[3]?.stats[0]?.value;

                    if (curHeroPlaytime > curFavoriteHeroPlaytime) {
                        curFavoriteHeroPlaytime = curHeroPlaytime;
                        curFavoriteHero = heroName;

                        Object.entries(allHeroData).forEach(([index, hero]) => {
                            if (hero.key == heroName) {
                                curFavortiteHeroImg = hero.portrait;
                            }
                        });
                    }
                }
            });

            // --- SETTING FAVORITE HERO ---
            setFavoriteHero(curFavoriteHero);
            setFavoriteHeroImg(curFavortiteHeroImg);
            setFavoriteHeroPlaytime(curFavoriteHeroPlaytime);

        } catch (error) {
            console.error(error);
        }
    };

    const disconnect = (e) => {
        e.preventDefault();
        localStorage.removeItem('TAG');
        localStorage.removeItem('PLATFORM');
        window.location = '/profil';
    }

    if (playerID) {

        useEffect(() => {
            if (playerID) {
                DataStyler();
            }
        }, [playerID]);

        if (username === null && playerID != null) {
            return (
                <>
                    <h1>Loading...</h1>
                    <h1>This may take a few seconds, please wait.</h1>
                    <h2 style={{ color: 'orange' }}>If this has taken more than 1 minute refresh tha page or try searching the username again.</h2>
                    <a href="/search" onClick={(e) => localStorage.clear('TAG')}>click here to try again</a>

                </>
            );
        }

        return (
            <div className='profil-root'>
                <div className='profil-navbar'>
                    <a href='/'>Home</a>
                    <img src='overwatch.png' alt='overwatch logo' />
                    <a href='https://github.com/KevinEJean/Portfolio' target='_blank'>Portfolio</a>
                </div>

                <div className='profil-content'>
                    <form className='profil-form'>
                        <div className='header' style={{ backgroundImage: `url(${namecard})` }}>
                            <img id='portrait' src={portrait} alt='portrait' />
                            <div className='user-info'>
                                <h1 id='username'>{username}</h1>
                                <h2 id='cosmetics'>{title} <img src={endorsementImg} alt={endorsementLevel} /></h2>
                            </div>
                        </div>

                        <hr />

                        <h1 id='colored-h1'>Competitve: <b>Season {curSeason}</b></h1>
                        <div className='competitive'>
                            <div className='ranks'>
                                <h1>{isPlatformPC ? 'PC' : 'Console'}</h1>
                                <img src='roles/tank.svg' alt='tank' />
                                <div className='rankIcon'>
                                    <img src={rankImageTank} alt={altRankTank} />
                                    <img src={tierImageTank} alt={altTierTank} />
                                </div>


                                <img src='roles/damage.svg' alt='damage' />
                                <div className='rankIcon'>
                                    <img src={rankImageDps} alt={altRankDps} />
                                    <img src={tierImageDps} alt={altTierDps} />
                                </div>

                                <img src='roles/support.svg' alt='support' />
                                <div className='rankIcon'>
                                    <img src={rankImageSup} alt={altRankSup} />
                                    <img src={tierImageSup} alt={altTierSup} />
                                </div>

                                <img src='roles/open.svg' alt='open' />
                                <div className='rankIcon'>
                                    <img src={rankImageOpen} alt={altRankOpen} />
                                    <img src={tierImageOpen} alt={altTierOpen} />
                                </div>
                            </div>

                            <div className='career-stats'>
                                <h1>Time played: <b>{(timePlayed / 3600).toFixed(0)}<u>hours</u></b></h1>
                                <h1>Games played: <b>{gamesPlayed}</b></h1>
                                <h1>Games won: <b>{gamesWon}</b></h1>
                                <h1>Games lost: <b>{gamesLost}</b></h1>
                                <h1>
                                    Favortite hero: <img src={favoriteHeroImg} alt={favoriteHero} /> <b>{(favoriteHeroPlaytime / 3600).toFixed(0)}<u>hours</u></b>
                                </h1>
                            </div>
                        </div>

                        <div className='buttons'>
                            <button onClick={disconnect}>Disconnect</button>
                        </div>
                    </form>
                </div>
                {<Footer />}
            </div>
        );

    } else {
        window.location = '/search';
    }
}