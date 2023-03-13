import React from "react";

function ShimmerRestrauntCard() {
    return (
        <div className="restaurant-list">
          
          {Array(10).fill("").map((e,idx)=>{
            return <div key={idx} className="shimmer-card"></div>
          })}

                
        </div>
    );
}

export default ShimmerRestrauntCard;
  