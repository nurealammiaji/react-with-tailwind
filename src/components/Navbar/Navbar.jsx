import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Links from "../Links/Links";
import { useState } from 'react';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        {
          "id": 1,
          "name": "Home",
          "path": "/"
        },
        {
          "id": 2,
          "name": "About",
          "path": "/about"
        },
        {
          "id": 3,
          "name": "Contact",
          "path": "/contact"
        },
        {
          "id": 4,
          "name": "Products",
          "path": "/products"
        },
        {
            "id": 5,
            "name": "Services",
            "path": "/services"
          }
      ]

    return (
        <>
            <nav>
                <div onClick={()=>setOpen(!open)} className='md:hidden'>
                    <span>{open === true ? <XMarkIcon className="w-6 h-6 text-blue-500" /> : <Bars3Icon className="w-6 h-6 text-blue-500" />}</span>
                </div>
                <ul className={`md:flex absolute md:static duration-500 mt-8 md:mt-0 py-2 pl-8 bg-purple-400 ${open ? 'top-6' : '-top-48'}`}>
                    {
                        routes.map(route => <Links key={route.id} route={route}></Links>)
                    }
                </ul>
            </nav>
        </>
    );
};

export default Navbar;