import { useLoaderData } from "react-router-dom";

export function CareersDetails() {

    const career = useLoaderData();

    return (
        <div className="carees-details">
            <h2>Career details: {career.title} </h2>
            <p>Starting Salary: {career.salary}</p>
            <p>Locarion: {career.location} </p>
            <div className="details">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laudantium, libero nihil dolor, ratione dolores dolorem, sapiente quos ut ab a totam sit neque culpa earum ad obcaecati. Voluptates, aliquid.</p>
            </div>
        </div>
    );
}

/* Loader function */

export const careersDetailsLoader = async ({ params }) => {

    const { id } = params;

    const res = await fetch(`http://localhost:4000/careers/${id}`)

    if (!res.ok) {
        throw Error("Could not find that career");
    }

    return res.json();
}