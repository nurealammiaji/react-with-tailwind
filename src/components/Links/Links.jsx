const Links = ({route}) => {
    return (
        <li className="mr-12 hover:bg-purple-600">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Links;