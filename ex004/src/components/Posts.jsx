import { useState, useEffect } from "react";
import { PostCard } from "./miniComponents/PostCard";
import { Spinner } from "./miniComponents/Spinner";
import { Heart } from "./miniComponents/Heart";

export function Posts() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function carregarDados() {
            try {
                setLoading(true);

                const resp = await fetch("https://jsonplaceholder.typicode.com/posts");

                if (!resp.ok) {
                    throw new Error("Erro ao carregar os dados.");
                }

                const data = await resp.json();

                setPosts(data);

            } catch (error) {
                console.error("Erro na requisição:", error);
            } finally {
                setLoading(false);
            }
        }

        carregarDados();

    }, []);


    return (
        <div>
            <Heart />

            <Spinner />

            {loading ? (
                <Spinner />
            ) : (
                posts.map((post) => (
                    <PostCard key={post.id} title={post.title} body={post.body} className={"post-container"} />
                ))
            )}
        </div>
    );


}
