import React, { useState } from 'react';
import styles from '../../styles/Navigation.module.css';
import { NavItem } from './NavItem';
import { HamburgerIcon } from './HamburgerIcon';
import { NavLink, NavProps } from '../../types';

export const Navigation: React.FC<NavProps> = ({ 
  links, 
  isMobileMenuOpen, 
  onToggleMobileMenu 
}) => {
  const[navLinks,setNavLinks]=useState<NavLink[]>(links?links:[]);
  console.log('navLinks',navLinks);
  const changeActive=(activeKey:string)=>{
    console.log('activeKey',activeKey);
    setNavLinks((prev)=>prev.map((i)=>{
      if(i?.id===activeKey){
        return {...i,isActive:true};
      }else{
        return {...i,isActive:false};
      }
    }))
  }


  return (
    <>
      <HamburgerIcon 
        isOpen={isMobileMenuOpen} 
        onClick={onToggleMobileMenu} 
      />
      
      <nav 
        className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {navLinks.map((link, index) => (
          <NavItem 
            key={index} 
            {...link} 
            onClick={() => {
              onToggleMobileMenu();
              changeActive(link?.id)
            }}
          />
        ))}
      </nav>
    </>
  );
};