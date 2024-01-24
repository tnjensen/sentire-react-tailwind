import { useEffect, useState } from 'react';
import {baseUrl} from '../../../components/common/settings';

const getPosts =  async () => {
  const token = import.meta.env.VITE_API_TOKEN;
  const url = baseUrl + "posts";
  const options = {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
          }
  }
  const response = await fetch(url, options);
  const result  = await response.json();
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

export default function TestPosts() {
  const [posts,setPosts] = useState([]);
  
  useEffect(() => {
    getPosts()
    .then(result =>  setPosts(result));
  }, [])
  
    return(
      <>
      <p>
        <strong>What people are listening to:</strong>
      </p>
    <div className="post">
      <ul>
       {posts}
      </ul>
    </div>
    </>
  )
}