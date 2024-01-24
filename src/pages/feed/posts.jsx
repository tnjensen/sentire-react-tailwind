import { useState, useEffect } from "react";

function Feed() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading,setLoading] = useState(true);
    const url = import.meta.env.VITE_API_URL + "posts";
    const token = import.meta.env.VITE_API_TOKEN;
    
    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
            }
        } 
        const fetchPosts = async () => fetch(url,options)
        .then(response => {
            if(response.ok){
                return response.json();
            }
            throw response;    
        })
        .then(data => {
            setData(data);
            console.log(data);
        })
        .catch(error =>{
            setError(error);
            setData(null);
        })
        .finally(() =>{
            setLoading(false)
        })
        fetchPosts();
    }, [url, token]);

    
    if(loading) return "Loading...";
    if(error) return "Error!";

    return(
        <>
        <h2>What people are listening to:</h2>
        {loading && <div>One moment...</div> }
        {error && (
            <div>{`There is a problem fetching the post - ${error}`}</div>
        )}
        <div className="post">
            <ul>
                {data.map((post) =>{
                    <>
                    <li key={post.id}>{post.title}</li>
                    <figure><img src={post.media ? post.media : '/assets/noCover.png'} className='postImg' alt='post image'/>
                    <figcaption className='caption'>{post.body}</figcaption>
                    </figure>
                    </>
                    } 
                )}  
            </ul>
        </div>
        </>
    )
}
export default Feed;