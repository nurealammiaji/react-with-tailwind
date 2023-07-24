import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Links from "./Links/Links";
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
                <div onClick={()=>setOpen(!open)}>
                    <span>{open === true ? <XMarkIcon className="w-6 h-6 text-blue-500" /> : <Bars3Icon className="w-6 h-6 text-blue-500" />}</span>
                </div>
                <ul className="md:flex">
                    {
                        routes.map(route => <Links key={route.id} route={route}></Links>)
                    }
                </ul>
            </nav>
        </>
    );
};

export default Navbar;