import React from "react";

const Card = ({ img, name, rating, price, discount, handleBuyNow, _id }) => {
  return (
    <div className="h-full rounded-none bg-base-100 shadow-sm hover:shadow-lg shadow-primary">
      <figure>
        <img className="h-56 w-full p-1"
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="p-1">
        <h2 className=" text-xs mt-3 h-10">{name.slice(0,70)}</h2>
        <p className="text-[red] my-1 h-8"> <span className="text-2xl">৳</span>{price}</p>
        <div className="">
          <button onClick={()=>handleBuyNow(_id)} className="btn btn-secondary w-full btn-sm rounded-sm text-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
