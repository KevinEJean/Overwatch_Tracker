export default function Footer() {

  return (
    <div className='footerRoot' style={{ color: "white", fontSize: "large", fontWeight: "bold" }}>
      <hr />
      <p>
        Copyright 2005-{new Date().getFullYear()} by <a href='https://github.com/KevinEJean' target='_blank'>THE ONE AND ONLY.</a> All Rights Reserved.
        <c style={{ color: "orange" }}>{` ${document.title}`}<sup> ©</sup></c> is powered by my gargantuous intelectual prowess.
      </p>
    </div>
  );
}
