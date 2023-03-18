import RestrauntCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { swiggy_api_URL } from "../constants"
import ShimmerRestrauntCard from "./ShimmerRestaurantCard";

function Body() {
    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);

    function filterData(searchText, restaurants) {
        if (searchText === "") {
            return restaurants;
        }
        return restaurants.filter((restaurant) =>
            restaurant?.data?.name
                ?.toLowerCase()
                ?.includes(searchText?.toLowerCase())
        );
    }

    async function getRestaurants() {
        try {
            const data = await fetch(swiggy_api_URL);
            const json = await data.json();
            console.log(json?.data?.cards[2]?.data?.data?.cards);
            setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
            setfilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getRestaurants();
    }, []);

    if (!allRestaurants) return null;

    return allRestaurants.length === 0 ? (
        <ShimmerRestrauntCard />
    ) : (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                        setfilteredRestaurant(
                            filterData(e.target.value, allRestaurants)
                        );
                    }}
                />
                <button
                    className="search-btn"
                    onClick={() => {
                        // filter data
                        setfilteredRestaurant(
                            filterData(searchText, allRestaurants)
                        );
                    }}
                >
                    search
                </button>
            </div>

            {filteredRestaurant.length === 0 ? (
                <h1>No Restraunt match your Filter!!!</h1>
            ) : (
                <div className="restaurant-list">
                    {filteredRestaurant.map((el, i) => (
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
            )}
        </>
    );
}

export default Body;
