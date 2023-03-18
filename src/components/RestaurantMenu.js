import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { swiggy_menu_api_URL, IMG_CDN_URL } from "../constants"
import ShimmerRestrauntCard from "./ShimmerRestaurantCard";

function RestaurantMenu() {
    const { restId } = useParams();
    const [restaurant, setRestaurant] = useState([]);
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        getRestaurantInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getRestaurantInfo() {
        const response = await fetch(swiggy_menu_api_URL + restId);
        const json = await response.json();
        // console.log(json?.data?.cards?.[0]?.card?.card?.info);
        // console.log(json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        setRestaurant(json?.data?.cards[0]?.card?.card?.info);
        setMenu(json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    }
    menu.forEach((el, idx) => {
        console.log(el)
    })


    return restaurant.length === 0 ? <ShimmerRestrauntCard /> : (
        <div >
            <h2>Restraunt id: {restId}</h2>
            <h2>{restaurant.name}</h2>

            <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt="placeholder" height={250} width={350} />
            <ul>
                <li><h4>{restaurant?.cuisines?.map((el, idx) => <span key={idx}>{el} </span>)}</h4></li>
                <li><h4>{restaurant.areaName}</h4></li>
                <li><h4>{restaurant.avgRating} ⭐</h4></li>
            </ul>

            <div>
                {menu.map((el, idx) => {
                    return (
                        <div key={idx}>
                            <h2>{el?.card?.card?.title}</h2>
                            <div className="restaurant-list">
                                {
                                    el?.card?.card?.itemCards?.map((el,) => {
                                        return (

                                            <div key={el?.card?.info?.name} className="card">
                                                {
                                                    el?.card?.info?.imageId ? (<img
                                                        src={IMG_CDN_URL + el?.card?.info?.imageId}
                                                        alt="noimage"
                                                    />) : (
                                                        <img
                                                            src="https://cdn.dribbble.com/users/1012566/screenshots/4187820/media/985748436085f06bb2bd63686ff491a5.jpg?compress=1&resize=400x300&vertical=top"
                                                            alt="noimage"
                                                        />
                                                    )

                                                }

                                                <h2>{el?.card?.info?.name}</h2>
                                                <h3>{el?.card?.info?.price / 100} rs</h3>
                                                <p>{el?.card?.info?.description}</p>
                                            </div>

                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    );
}

export default RestaurantMenu;
