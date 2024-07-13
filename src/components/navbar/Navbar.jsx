'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MenuIcon from '@mui/icons-material/Menu';
import Styles from './Navbar.module.css';
import styled from '@emotion/styled';


const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (index) => {
    setActiveIndex(index);
  };

  const links = [
    { title: 'Home', path: '/' },
    { title: 'Shop', path: '/shop' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  const session = true
  const isAdmin = false
  return (
    
    <nav className={` ${Styles.navbar} fixed w-full flex justify-between items-center py-4 px-6 text-gray-200 `}>
      <div className="logo text-2xl font-bold">
        <Link href="/">
          <h1>Logo</h1>
        </Link>
      </div>
      
        <MenuIcon className={Styles.menuButton}
        onClick={() => setMenuOpen((prev) => !prev)} />
        {menuOpen && (<div className={Styles.mobileLinks}>
          {
            links.map((link, index) => (
              <Link key={index} href={link.path} className={`hover:text-gray-500 ${activeIndex === index ? 'text-gray-500' : ''} `}onClick={() => handleLinkClick(index)}>
                {link.title}
              </Link>
            ))
          }
         
          </div>)}
      
      <div className={Styles.links}>
        {links.map((link, index) => (
          <Link key={index} href={link.path}
          className={`hover:text-gray-500 ${activeIndex === index ? 'text-gray-500' : ''}`}
              onClick={() => handleLinkClick(index)}>
            
              {link.title}
            
          </Link>
        ))}
         {isAdmin?(
            <>
            <Link href="/admin" className={`hover:text-gray-500  `}onClick={() => handleLinkClick(index)}>
            Admin
            </Link>
            <button className={Styles.logout}>Logout</button>
            </>
          ):(<Link className={`hover:text-gray-500  `} href="./login">Login</Link>)}
        <SearchIcon />
        <Link href="/cart"><ShoppingCartIcon /></Link>
        <Link href="/rate"><StarBorderIcon /></Link>
      </div>
    </nav>
 
  );
};

export default Navbar;
