import './Footer.css';

export default function Footer() {

  return (
    <div className='footerRoot'>
      <hr />
      <p>
        Copyright 2005-{new Date().getFullYear()} by <a href='https://github.com/KevinEJean' target='_blank'>THE ONE AND ONLY <sup>©</sup></a>. All Rights Reserved.
        {` ${document.title}`} is powered by my gargantuous intelectual prowess.
      </p>
    </div>
  );
}
