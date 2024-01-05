import { useLoaderData, useNavigate } from "react-router-dom";

const SinglePost = () => {
    const post = useLoaderData();
    const {title, body} = post;
    const navigate = useNavigate();
    const handleGo = ()=>{
        navigate(-1)
    }
    return (
        <div>
            <h1>Details about : {title}</h1>
            <p>{body}</p>
            <button onClick={handleGo}>Go back</button>
        </div>
    );
};

export default SinglePost;