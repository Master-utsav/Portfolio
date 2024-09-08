import NavItems from '@/components/Navitems';
import React from 'react'

const Navbar = () => {
  const [isOpen , isSetOpen] = React.useState<boolean>(false);

  const toggleMenu = () => {
    isSetOpen(prevIsOpen => !prevIsOpen);
  }
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center py-5 mx-auto c-space'>
            <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
                UTSAV
            </a>
            <button onClick={toggleMenu} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' 
                    aria-label='Toggle Menu'>
                <img src={ isOpen ? "assets/close.svg" : "assets/menu.svg" } alt="toggle" className='w-6 h-6' />
            </button>

            <nav className={`sm:flex hidden`}>
              <NavItems/>
            </nav>
        </div>
      </div>

      <div className={`nav-sidebar bg-black-200 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className='p-5'>
          <NavItems/>
        </nav>

      </div>
    </header>
  )
}

export default Navbar
