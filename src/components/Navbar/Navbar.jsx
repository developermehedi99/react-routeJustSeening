import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav>
            <ul className="mr-5">
                <Link className="mr-5" to="/">Home</Link>
                <Link className="mr-5" to="/about">About</Link>
                <Link className="mr-5" to="/contact">Contact</Link>
                <Link className="mr-5" to="/users">Users</Link>
                <Link className="mr-5" to="/posts">Posts</Link>
            </ul>
        </nav>
    );
};

export default Navbar;