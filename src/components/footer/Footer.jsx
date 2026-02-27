import './Footer.css'

export default function Footer() {

  return (
    <div className='footerRoot'>
      <hr />
      <p>
        Copyright 2005-{new Date().getFullYear()} by <a href='https://github.com/KevinEJean' target='_blank'><sup>©</sup> THE ONE AND ONLY</a>. All Rights Reserved.
        {` ${document.title}`} is powered by my gargantuous intelectual prowess.
      </p>
    </div>
  );
}
