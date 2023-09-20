import { useLoaderData } from "react-router-dom";
import Post from "../post/Post";


const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <h2>All Posts are here: {posts.length}</h2>
            <div className="grid grid-cols-3 gap-7 container mx-auto">
                {
                    posts.map((post) => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;