import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { swiggy_menu_api_URL, IMG_CDN_URL } from "../constants"

function RestaurantMenu() {
    const { restId } = useParams();
    const [restaurant, setRestaurant] = useState([]);
    // const [menu,setMenu] = useState([]);

    useEffect(() => {
        getRestaurantInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getRestaurantInfo() {
        const response = await fetch(swiggy_menu_api_URL + restId);
        const json = await response.json();
        // console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        setRestaurant(json?.data?.cards[0]?.card?.card?.info);
        // setRestaurant(json);
    }

    return (
        <div>
            <div>
                <h1>Restraunt id: {restId}</h1>
                <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt="placeholder" />
                <h2>{restaurant.name}</h2>
                <h4>{restaurant.cuisines.map(el => `${el} `)}</h4>
                <h4>{restaurant.areaName}</h4>
                <h4>{restaurant.city}</h4>
                <h4>{restaurant.avgRating}</h4>

                {/* <h2>{restaurant.}</h2>
                <h2>{restaurant.}</h2> */}

            </div>


        </div>
    );
}

export default RestaurantMenu;
