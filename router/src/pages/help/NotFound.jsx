import { Link } from "react-router-dom";
export function NotFound (){
    return(
        <div>
            <h2> Page not found! </h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium corporis, facere iure suscipit veritatis odit totam molestias blanditiis accusamus, ducimus, impedit doloribus illum tempore minus rem perspiciatis consectetur aspernatur consequuntur.</p>

            <p>Go to <Link to="/"> HomePage. </Link> </p>
        </div>  
    );
}