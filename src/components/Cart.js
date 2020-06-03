import React from 'react'
import datas from '../data/data.json'

 function Cart() {
    return (
        <div className="modal fade " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
            <svg class="bi bi-bag-fill m-1 text-danger" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 4h14v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm7-2.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z"/>
</svg>
              <h5 className="modal-title text-danger m-1 " id="exampleModalLabel">
             
              Cart
              </h5>
              <button type="button" className="close text-danger" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">

            {datas.map((data,key)=>(

                <div id={key} key={key}  className="card m-2 shadow p-3">

                <div className="row no-gutters">
    <div className="col-sm-4 ">
   
      <img  src={data.img} className="card-img ml-2 mt-4 " alt={data.title}/>
    </div>
    
    <div className="col-sm-8">
    <button type="button" className="close m-2 text-danger" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
      <div className="card-body">
        <h6 className="card-title">{data.shortName}</h6>
        <p className="card-text">Price: {data.price} $</p>
        <p className="card-text">Quantity: <select style={{maxWidth:'50px'}} class="custom-select m-2" id="inputGroupSelect01">
    <option selected >1</option>
    <option value="1">2</option>
    <option value="2">3</option>
    <option value="3">4</option>
  </select> </p>
        
      </div>
     
    </div>
  </div>
               
                </div>
            ))}



            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-danger" >Clear All</button>
              <button type="button" className="btn btn-success">Buy</button>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Cart;