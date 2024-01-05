import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {title,id, userId} = post;
    const nevigate = useNavigate();
    const handleDetails=()=>{
        nevigate(`/post/${id}`)
    }
    return (
        <div className="border bg-green-200 rounded-lg p-5 text-center">
            <h2>userId: {userId}</h2>
            <h1>{title}</h1>
            <Link to={`/post/${id}`}>details</Link>
            <button onClick={handleDetails}>click show details</button>
        </div>
    );
};

export default Post;