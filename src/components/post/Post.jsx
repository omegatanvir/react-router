import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
const Post = ({post}) => {
    const {id,title, body} = post;
    const navigate = useNavigate()
    const handleShowDetails = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div className='border border-red-400 p-8 rounded-lg'>
            <h2 className='text-3xl mb-3 font-bold'>{title}</h2>
            <p className='text-2xl'>{body}</p>
            <Link to={`/post/${id}`}>Details</Link>
            <button onClick={handleShowDetails}>Click To See Details</button>
        </div>
    );
};
Post.propTypes ={
    post: PropTypes.object
}
export default Post;