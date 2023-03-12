import RestrauntCard from "./RestrauntCard";
import { data } from "../constants";
import { useState } from "react";


function Body() {
    const [searchText, setSearchText] = useState("");
    const [restaurants,setRestaurants] = useState(data);
    function filterData(searchText, restaurants)
    {
        if(searchText === "") {
            return restaurants;
        }
        return restaurants.filter((restaurant) => restaurant.data.name.toLowerCase().includes(searchText))
    }

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button
                    className="search-btn"
                    onClick={()=>{
                        // filter data
                        const filteredData = filterData(searchText,data)
                        setRestaurants(filteredData)
                    }}
                >
                    search
                </button>
            </div>

            <div className="restaurant-list">
                {restaurants.map((el, i) => (
                    <RestrauntCard
                        key={el.data.id}
                        // name={el.data.name}
                        // cuisines={el.data.cuisines}
                        // image={el.data.cloudinaryImageId}
                        // rating={el.data.avgRating}
                        {...el.data}
                    />
                ))}
            </div>
        </>
    );
}

export default Body;
