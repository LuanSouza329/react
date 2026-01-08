import { IoIosSearch } from "react-icons/io";

export function Search() {
    return (
        <div className="search">
            <div className="search-box">
                <IoIosSearch className="search-icon"/>
                <input type="text" placeholder="Search note" />
            </div>
            <button type="submit">Search</button>
        </div>
    );
}