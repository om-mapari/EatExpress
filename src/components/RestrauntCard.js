import React from "react";

function RestrauntCard({ name, cuisines, cloudinaryImageId, avgRating }) {

    return (
        <div  className="card">
            <img
                src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
                alt="img"
            />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating} ⭐</h4>
        </div>
        
    ); 
}


export default RestrauntCard;