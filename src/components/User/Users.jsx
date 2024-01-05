import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
    const users = useLoaderData();
    console.log(users)
    return (
        <div>
            <h1>All users : {users.length}</h1>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    users.map(user => <User
                        key={user.id}
                        user={user}
                    ></User>)
                }
            </div>
        </div>
    );
};

export default Users;