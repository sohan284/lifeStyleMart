import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({search,product }) => {
  const navigate = useNavigate();
  const { name, price, img, size, discount, p_id,_id,rating } = product;
 
  const handleBuyNow = (id) =>{
    navigate(`/buynow/${id}`)

  }
  if(name.toLowerCase().includes(search)){
    return (
      <div>
        <div className="card card-side productCard m-1 p-1">
          <figure> <img className='w-56' src={img} alt="" /></figure>
          <div className="card-body">
            <h2 className="card-title  text-xl">{name}</h2>
            <h3 className=' font-semibold text-[#ff6117] text-lg'><span className='text-[#a1a1a1] text-sm'>{discount}</span>  BDT {price}</h3>
            <h3 className='text-xs'>{size}</h3>
            <h4 className='text-[orange]'>{rating}</h4>
            <div className="card-actions justify-end">
            <button onClick={()=>handleBuyNow(_id)} className="btn buyButton btn-primary button">Buy now</button>
              <button className="btn button btn-primary button">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

};

export default Product;