import { useLocation } from "react-router-dom";
// import AppProductList from "./AppProductList";
import SearchProduct from "./searchproduct";

function SearchResults() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("query");

    return (
        <div>
            <h1>Search Results for "{query}"</h1>
            <SearchProduct searchQuery={query} />
        </div>
    );
}

export default SearchResults;
