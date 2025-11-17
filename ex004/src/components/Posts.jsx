import { useState, useEffect } from "react";

export function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setPosts(response)
            })
    }, []);

    return (
        <>
            {posts.map((post)=>
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            )}
        </>
    );
}