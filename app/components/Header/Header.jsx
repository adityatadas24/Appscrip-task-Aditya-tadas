import Image from "next/image";
import '../Header/header.css'


const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <div className="nav-left">
        <Image src="/burger.png" alt="burger" width="35" height="35" className="burger"/>

          <Image src="/Logo.png" alt="logo" width="35" height="35" />
        </div>
        <div className="nav-center">
          <h1>LOGO</h1>
        </div>
        <div className="nav-right">
          <Image src="/search-normal.png" alt="search" width="25" height="25" />
          <Image src="/heart.png" alt="heart" width="25" height="25" />
          <Image src="/shopping-bag.png" alt="bag" width="25" height="25" />
          <Image
            src="/profile.png"
            alt="profile"
            width="25"
            height="25"
            className="profile"
          />

          <div className="eng-section">
            <h3>
              ENG
              <span>
                <Image
                  src="/arrow-left.png"
                  alt="arrow"
                  width="20"
                  height="20"
                />
              </span>
            </h3>
          </div>
        </div>
       
      </div>
      <div className="about">
          <a href="#shop">SHOP</a>
          <a href="#skills">SKILLS</a>
          <a href="#stories">STORIES</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT US</a>
        </div>
    </div>
  );
};

export default Header;
