import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {title} = post;
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};

export default PostDetails;