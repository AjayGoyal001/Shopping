import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

function Home() {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchProductData() {
        setLoading(true);

        try{
            const res = await fetch(API_URL);
            const data = await res.json();

            setPosts(data);
        }

        catch(error){
            console.log("Shown a error");
            setPosts([]);
        }

        setLoading(false);
    }

    useEffect( () => {
        fetchProductData();
    }, []);

    return(
        <div>
            {
                loading ? (<Spinner />) : 
                (posts.length > 0 ? 
                    (
                        <div className="grid sm:grid-cols-2 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-5xl mx-auto space-y-10 space-x-5 min-h-[80vh]">
                            {
                                posts.map( (post) => (<Product key={post.id} post={post} />))
                            }
                        </div>
                    ) :
                    (
                        <div className="flex item-center justify-center h-full">
                            <p>No posts Found</p>
                        </div>
                    )
                )
            }
        </div>
    );
}

export default Home;