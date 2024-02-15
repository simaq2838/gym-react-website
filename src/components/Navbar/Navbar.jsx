import React, {useState, useEffect} from 'react'
import "./Navbar.css"
const Navbar = () => {
  
  useEffect(() => {
     // Function to toggle between showing and removing hamburger menu
    const handleScroll = () => {
      settoggle(false)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const[toggle, settoggle] = useState(false) 
  const handleClick = (e) =>
  {
    settoggle(!toggle)
  }
  return (
    <header className="header">

    <a href="Hero" className="logo"> Key <span>2</span> Fitness </a>

    <div id="menu-btn" className={`fas fa-bars ${toggle ?"fa-times" : ""}`} onClick={handleClick}></div>
     {/* Menu items and Navigation */}
    <nav className={`navbar ${toggle ?"active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
    </nav>

</header>

  )
}

export default Navbar