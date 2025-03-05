import Logo from '../../assets/Logo.png';
import { useState } from 'react';

const navbarlinks = [
    {
        id: 1,
        title: 'Home',
        Link: '/'
    },
    {
        id: 2,
        title: 'About',
        Link: '#'
    }, {
        id: 3,
        title: 'Services',
        Link: '#'
    }, {
        id: 4,
        title: 'Contact',
        Link: '#'
    },

]

const navbarRedes = [
    {
        id: 1,
        title: 'Facebook',
        Link: '#',
        icons: 'bi bi-facebook'
    }
]

export const Navbar = () => {

    const [isopen, setIsopen] = useState(false);

    const toggleMenu = () => {
        setIsopen(!isopen);
    }

    return (
        <nav className="fixed top-0 left-0 bg-purple-900 w-full bg-opacity-30 backdrop-blur-md z-50">
            <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>
                <img src={Logo} alt="Logo" className='w-[100px]' />

                {/* Boton hamburguesa */}
                <button onClick={toggleMenu} className='text-white md:hidden'>
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                    >
                        {isopen ? (<path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M6 18L18 6M6 6l12 12'
                        />) : (<path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />)}
                    </svg>
                </button>
                {/* Navegacion Desktop */}
                <div className='hidden md:block'>
                    <ul className='flex sm:space-x-8 space-x-4'>
                        {navbarlinks.map((link) => (
                            <li key={link.id}>
                                <a className='text-white sm:text-lg text-sm hover:text-sky-100 transition-transform hover:scale-110 inline-block transform duration-300'
                                    href={link.Link}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Navegacion Redes Desktop */}
                <div className='hidden md:block'>
                    <ul className='flex space-x-4'>
                        {navbarRedes.map((link) => (
                            <li key={link.id}>
                                <a
                                    target='_blank'
                                    rel='noreferrer'
                                    className='inline-block transition-transform duration-300 transform hover:scale-125'
                                    href={link.Link}
                                >
                                    <i className={`${link.icons} sm:text-2xl text-lg text-white hover:text-sky-200 transition-all duration-300`}></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

               

            </div>
             {/* Navegacion Mobile */}
             <div className={`md:hidden absolute w-full bg-purple-950 transition-all duration-300 ${isopen ? "opacity-100 visible" : "opacity-0 invisible"} transition-all duration-300`}>
                    <ul className='flex flex-col px-4 py-2'>
                        {navbarlinks.map((link) => (
                            <li key={link.id} className='py-2 text-center'>
                                <a className='text-white hover:text-sky-200'
                                    href={link.Link} onClick={() => setIsopen(false)} >{link.title}</a>
                            </li>
                        ))}
                    </ul>

                    <ul className=' flex space-x-4 px-4 py-2 border-t border-x-purple-700 justify-center'>
                        {navbarRedes.map((link) => (
                            <li key={link.id}>
                                <a
                                    target='_blank'
                                    rel='noreferrer'
                                    className='inline-block'
                                    href={link.Link}
                                    onClick={() => setIsopen(false)}
                                >
                                    <i className={`${link.icons} text-lg text-white hover:text-sky-200`}></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
        </nav>
    );
}

