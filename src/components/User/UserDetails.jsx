import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, website} = user;
    return (
        <div>
            <h1>Details about : {name}</h1>
            <p>website: {website}</p>
        </div>
    );
};

export default UserDetails;