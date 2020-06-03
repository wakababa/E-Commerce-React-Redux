import React from "react";
import datas from "../data/data.json";
import Filter from './Filter'
function ProductsList() {
  return (
    <div className="container-xl">
      <h3 className="text-center text-monospace font-weight-bold  mt-3">
        NEW LAPTOPS
      </h3>
      <Filter/>
      <div className="row justify-content-center">
        {datas.map((data, key) => (
          
            <div key={key} className="card col-md-4 m-3 shadow-lg p-3">
              <img   src={data.img} className="card-img-top w-50 mt-1 mx-auto " alt="..." />
              <div className="card-body  ">
                <h6 className="card-title text-left ">{data.shortName}</h6>
                <h5 className="card-text ">Price: {data.price} $</h5>
                <h6 className="card-text">Shipping: Free</h6>
               <button className="btn float-right btn-danger">
         
               <svg class="bi bi-cart-plus" width="1.7em" height="1.7em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8.5 5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 .5-.5z"/>
  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0v-2z"/>
  <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
</svg>
               </button>
              </div>
            </div>
          
        ))}
        
      </div>
    </div>
  );
}
export default ProductsList;