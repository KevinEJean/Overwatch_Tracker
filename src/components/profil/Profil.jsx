import './Profil.css'
import Footer from '../footer/Footer.jsx'

export default function Profil() {

    return (
        <div className='profil-root'>
            <div className='profil-navbar'>
                <a href='/'>Home</a>
                <a href='https://github.com/KevinEJean/Portfolio' target='_blank'>Portfolio</a>
            </div>
            <h1>Profil page</h1>
            {<Footer />}
        </div>

    );
}