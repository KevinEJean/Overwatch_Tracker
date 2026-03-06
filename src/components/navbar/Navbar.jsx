import './Navbar.css';

export default function Navbar({ setFrame, curFrame = '' }) {

  const changeFrame = (e) => {
    e.preventDefault();
    setFrame(String(e.target.textContent));
    e.target.style.color = 'white';
  }

  return (
    <div className='navbarRoot'>
      <a id='home_btn' href='/'>Home</a>
      <a href='/profil'>Players</a>
      <a href='https://github.com/KevinEJean/Portfolio' target='_blank'>Portfolio</a>
    </div>
  );
}