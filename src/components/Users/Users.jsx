import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    console.log(users)
    return (
        <div className="container text-3xl mx-auto">
            <h2 className="text-center my-8">Users: {users.length}</h2>
            <div className='grid grid-cols-3 gap-4 '>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;