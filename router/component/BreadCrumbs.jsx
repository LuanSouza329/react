import { Link, useLocation } from "react-router-dom";

export function BreadCrumbs (){
    const location = useLocation();

    let currentLink = "";

    const crumbs = location.pathname.split("/")
        .filter(crumb => crumb !== "")
        .map(crumb => {
            currentLink =+ `/${crumb}`

            return (
                <div className="crumb" key={crumb}>
                    <Link to={currentLink}>{crumb}</Link>
                </div>
            )
        })

    return(
        <div>
            <div className="breadCrumbs">
                {crumbs}
            </div>
        </div>
    );
};