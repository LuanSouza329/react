import { Link, NavLink, Outlet } from "react-router-dom";
import { BreadCrumbs } from "../component/BreadCrumbs";
export function Header() {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <h1> <Link to={"/"}> Jobarrouter</Link> </h1>
                    <NavLink to={"/"}> Home </NavLink>
                    <NavLink to={"/about"}> About </NavLink>
                    <NavLink to={"/help"}> Help </NavLink>
                    <NavLink to={"/careers"}> Careers </NavLink>
                </nav>
                <BreadCrumbs />
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    );
}