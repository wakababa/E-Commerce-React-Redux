import React from 'react'

 function Filter() {
    return (
      <>
        <div class="card ">
  <div class="card-header">
  <svg class="bi bi-filter m-1" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
</svg>
    Filter
  </div>
  <div class="card-body">
    <h6 class="card-title">Choose your favorite models</h6>
    <div className="row">
        <div className="col">
        <div class="custom-control custom-checkbox my-1 mr-sm-2">
    <input type="checkbox" class="custom-control-input" id="apple"/>
    <label class="custom-control-label" for="apple">Apple</label>
  </div>
        </div>
        <div className="col">
        <div class="custom-control custom-checkbox my-1 mr-sm-2">
    <input type="checkbox" class="custom-control-input" id="asus"/>
    <label class="custom-control-label" for="asus">Asus</label>
  </div>
        </div>
        <div className="col">
        <div class="custom-control custom-checkbox my-1 mr-sm-2">
    <input type="checkbox" class="custom-control-input" id="hp"/>
    <label class="custom-control-label" for="hp">Hp</label>
  </div>
        </div>
    </div>

     <div className="row ">
         <div className="col">
         <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
    <option selected>All</option>
    <option value="1">High to Low</option>
    <option value="2">Low to High</option>
    <option value="3">A - Z</option>
  </select>
         </div>
     </div>
  </div>
</div>

      </>
    )
}
export default Filter;