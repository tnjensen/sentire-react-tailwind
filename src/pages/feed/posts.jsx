import { useState, useEffect } from "react";

const url = import.meta.env.VITE_API_URL + "posts";
const token = import.meta.env.VITE_API_TOKEN;
const options = {
    
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
    }
} 
async function fetchPosts(){
    try{
        const response = await fetch(url,options);
        const result = await response.json();
        const arrayList = result.map(
            item => <><li key={item.id}><b>{item.title}</b>
            <figure><img src={item.media ? item.media : '/assets/noCover.png'} className='postImg' alt='post image'/>
            <figcaption className='caption'>{item.body}</figcaption>
            </figure>
            </li>
            </>
            )
            return arrayList;    
    }
    catch(error){
        console.log('Error: ', error);
    }
}
function Feed() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
       
        fetchPosts()
        .then(data => setData(data));
    }, []);



    return(
        <>
        <h2>What people are listening to:</h2>
       
        <div className="post">
            <ul>
                {data}  
            </ul>
        </div>
        </>
    )
}
export default Feed;