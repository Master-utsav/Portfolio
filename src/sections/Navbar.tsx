import NavItems from '@/components/NavItems.tsx';
import React from 'react';
import styles from './Navbar.module.scss'; // Import CSS module
import StaggeredBlurText from '@/components/StaggeredBlurText';

const Navbar = () => {
  const [isOpen, isSetOpen] = React.useState<boolean>(false);

  const toggleMenu = () => {
    isSetOpen(prevIsOpen => !prevIsOpen);
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center py-5 mx-auto c-space'>
          <StaggeredBlurText/>

          <button onClick={toggleMenu} className={`${styles['menu-btn']} sm:hidden flex`} aria-label='Toggle Menu'>
            <div className={`${styles['menu-btn__burger']} ${isOpen ? styles.open : ''}`}></div>
          </button>

          <nav className={`sm:flex hidden`}>
            <NavItems/>
          </nav>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div className={`nav-sidebar bg-black-200 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className='p-5 text-center' onClick={toggleMenu}>
          <NavItems/>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
