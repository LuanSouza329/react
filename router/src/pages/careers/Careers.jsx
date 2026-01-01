import { useLoaderData, Link } from "react-router-dom";

export  function Careers() {
    const careers = useLoaderData();

    return (
        <div className="careers">
            {careers.map(career => (
                <Link to={career.id.toString()} key={career.id}> 
                    <p>{career.title}</p>
                    <p> Based in {career.location}</p>
                </Link>
            ))}
        </div>
    );
};

/* Loader function */
export const careersLoader = async () => {
    const res = await fetch('http://localhost:4000/careers')

    if(!res.ok) {
        throw Error ("Could not fetch that career");
    }

    return res.json();
}

/* Estamos usando o pacote  Json Server

    para criar um servidor que vai rodar nosso json em um endpoint
    json-server -p 4000 -w ./data/db.json <- é o caminho do json
*/