import React, { useState } from 'react';
import './navbar.css';
import {AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { RiHeadphoneLine } from "react-icons/ri";
import ScrollReveal from 'scrollreveal';



function Navbar() {

  const sr = ScrollReveal({
    distance: '60px',
    duration: 2200,
    delay: 500,
    reset: true
  });

  sr.reveal("nav", {
    delay: 500,
    origin: 'bottom',
  });

  const [activenav, setActivenav] = useState("#");

  const handleClick = (link) => {
    setActivenav(link);
  };

  const links = [
    { href: "#", icon: <AiOutlineHome /> },
    { href: "#about", icon: <AiOutlineUser /> },
    { href: "#experience", icon: <MdOutlineBookmarkBorder /> },
    { href: "#portfolio", icon: <IoBriefcaseOutline /> },
    { href: "#contact", icon: <RiHeadphoneLine /> },
  ];

  return (
    <nav>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className={activenav === link.href ? "active" : ""}
          onClick={() => handleClick(link.href)}
        >
          {link.icon}
        </a>
      ))}
    </nav>
  );
}

export default Navbar