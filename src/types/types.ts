export interface NavLink {
  text: string;
  href: string;
  id:string;
  isActive?: boolean;
}

export interface NavItemProps extends NavLink {
  onClick?: () => void;
}

export interface NavProps {
  links: NavLink[];
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
}

export interface HamburgerIconProps {
  isOpen: boolean;
  onClick: () => void;
}
  
  export interface SocialIconProps {
    iconUrl: string;
    iconAlt: string;
    href: string;
    ariaLabel: string;
  }
  
  export interface StoryCardProps {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
  }
  
  export interface FeatureProps {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    isOpen?: boolean;
  }
  
  export interface HeroProps {
    title: string;
    description: string;
    ctaText: string;
    imageUrl: string;
    imageAlt: string;
  }
  
  export interface HeaderProps {
    logoUrl: string;
    logoAlt: string;
    companyName: string;
  }
  
  export interface FooterProps {
    logoUrl: string;
    logoAlt: string;
    socialLinks: Array<SocialIconProps>;
    navLinks: Array<NavItemProps>;
  }