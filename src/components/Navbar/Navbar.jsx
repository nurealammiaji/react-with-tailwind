import Links from "./Links/Links";

const Navbar = () => {

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