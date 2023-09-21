import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {name} = user;
    const navigate = useNavigate()
        const handleGoBack = () => {
            navigate(-1)
    }
    return (
        <div>
            <h2>User Name: {name}</h2>
            <button onClick={handleGoBack} className="px-5 py-2 rounded-lg bg-red-400 border border-red-50">Go Back</button>
        </div>
    );
};

export default UserDetails;