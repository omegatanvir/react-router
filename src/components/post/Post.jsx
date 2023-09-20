import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Post = ({post}) => {
    const {id,title, body} = post;
    return (
        <div className='border border-red-400 p-8 rounded-lg'>
            <h2 className='text-3xl mb-3 font-bold'>{title}</h2>
            <p className='text-2xl'>{body}</p>
            <Link to={`/post/${id}`}>Details</Link>
        </div>
    );
};
Post.propTypes ={
    post: PropTypes.object
}
export default Post;