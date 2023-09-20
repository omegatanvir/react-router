import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const User = ({user}) => {
    const {id, name, email, phone} = user;
    return (
            <div className="p-6 border-2 border-sky-500 rounded-xl bg-yellow-300">
                <h2>Name: {name}</h2>
                <h2>Email: {email}</h2>
                <h2>Phone: {phone}</h2>
                <Link className='rounded-lg bg-green-600 text-white border border-red-400' to={`/user/${id}`}>Show Details</Link>
            </div>
    );
};
User.propTypes = {
    user:PropTypes.object
}
export default User;