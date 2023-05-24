import React from 'react'
import { useState,useEffect } from 'react'

function Post(props) {
    const [post,setPost]=useState([])
    const getpost= ()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(res=>setPost(res))
      }
      useEffect(()=>getpost(),[])
      let handledelete=(id)=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
          method:"DELETE"
        })
        .then((data)=>getpost()); 
      };
       
  return (
    <div>
        {
                    post.map((e,i)=>(<div key={i}>
                    <h1>Title:{e.title}</h1>
                    <p>Body:{e.body}</p>
                    <p>{e.id}</p>
                    <button onClick={()=>handledelete(e.id)}>delete</button>
                    </div>
                            ))
        } 
    </div>
  )
}

export default Post