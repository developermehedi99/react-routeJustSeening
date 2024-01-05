import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id,name, username, email} = user;
    return (
        <div className="border bg-purple-200 rounded-lg p-5 text-center">
            <h2>{name}</h2>
            <h3>{username}</h3>
            <p>{email}</p>
            <Link to={`/user/${id}`}><button className="border py2 px-4 border-red-800">show details</button></Link>
        </div>
    );
};

export default User;