import React, { useState } from "react";
import datas from "../data/data.json";
import { connect } from "react-redux";
import { removeProduct, upQuantity, downQuantity } from "../redux/cart/actions";

function Cart(props) {
  const { cartList, removeProduct, upQuantity, downQuantity, total } = props;

  const [numberChange, setNumberChange] = useState(" ");

  const handleSubmit=(price)=>{

    alert(`You payed ${price} $`)
  }

  return (
    <div
      className="modal fade "
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <svg
              class="bi bi-bag-fill m-1 text-danger"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 4h14v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm7-2.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z" />
            </svg>
            <h5 className="modal-title text-danger m-1 " id="exampleModalLabel">
              Cart
            </h5>
            <button
              type="button"
              className="close text-danger"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {cartList.length < 1 ? (
              <h4 className="text-center ">Have no product</h4>
            ) : (
              cartList.map((data, key) => (
                <div id={key} key={key} className="card  m-2 shadow p-3">
                  <div className="row no-gutters">
                    <div className="col-sm-4 ">
                      <img
                        src={data.img}
                        className="card-img ml-2 mt-4"
                        alt={data.title}
                      />
                    </div>

                    <div className="col-sm-8">
                     
                      <div className="card-body">
                        <h6 className="card-title">{data.shortName}</h6>
                        <p className="card-text">Price: {data.price} $</p>
                        <svg
                          cursor="pointer"
                          onClick={() => downQuantity(data.id)}
                          class="bi bi-dash"
                          width="1.5em"
                          height="1.5em"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5z"
                          />
                        </svg>
                        <span class="badge badge-light">{data.quantity}</span>
                        <svg
                          onClick={() => upQuantity(data.id)}
                          cursor="pointer"
                          class="bi bi-plus"
                          width="1.5em"
                          height="1.5em"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
                          />
                          <path
                            fill-rule="evenodd"
                            d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
                          />
                        </svg>
                        <button
                        onClick={() => removeProduct(data.id)}
                        type="button"
                        className="close m-2 text-danger"
                        aria-label="Close"
                      >
                      <i class="fa fa-trash" aria-hidden="true"></i>
                        {/* <span aria-hidden="true">&times;</span> */}
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger "
              data-dismiss="modal"
            >
              Close
            </button>
            
            <h6>{total === 0 ? null : <span>Total Price : {total}$</span>}</h6>
            <button 
            onClick={()=>handleSubmit(total)}
            type="button" className="btn btn-success">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  const { cartList, products, total } = state;
  return { cartList, products, total };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    removeProduct: (id) => dispatch(removeProduct(id)),
    upQuantity: (id) => dispatch(upQuantity(id)),
    downQuantity: (id) => dispatch(downQuantity(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
