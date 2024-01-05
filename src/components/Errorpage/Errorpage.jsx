import { Link } from "react-router-dom";

const Errorpage = () => {
    return (
        <div>
            <h1>Page NOt Fount</h1>
            <h1 className="text-3xl">404</h1>
            <Link to="/">Home</Link>
        </div>
    );
};

export default Errorpage;