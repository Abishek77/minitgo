 
import { Link } from "react-router-dom";

export const Checkout = () => {
  return (
    <>

    
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <div className="container-fluid p-5" style={{ backgroundColor: "#eee" }}>
      <div className="card">
        <div className="card-body">
          <div className="row justify-content-center pb-5">
            <div className="col-md-7 col-xl-5 mb-4 mb-md-0">
              <div className="py-4 d-flex flex-row">
                <h5>
                  <span className="check-square"></span>
                  <b>ELIGIBLE</b> |
                </h5>
                <span className="ps-2">Pay</span>
              </div>
              
              <div className="pt-2">
                <div className="d-flex pb-2">
                  <div>
                    <p>
                      <b>
                        Patient Balance{" "}
                        <span className="text-success">1,350 RS</span>
                      </b>
                    </p>
                  </div>
                  <div className="ms-auto">
                    <p className="text-primary">
                    <Link to="/" className="btn mx-1" role="button" border border-dark>Add payment card</Link>
                    </p>
                  </div>
                </div>
                <p>
                  This is an estimate for the portion of your order due today.
                  review, refunds and/or balances will reconcile automatically.
                </p>
                <div className="d-flex flex-row pb-3">
                <div className="d-flex align-items-center pe-2">
                    <input type="radio" name="radioNoLabel" id="radioNoLabel1" checked />
                  </div>
                  <div className="rounded border d-flex w-100 p-3 align-items-center">
                    <p className="mb-0">
                      <i className="fab fa-cc-visa text-primary pe-2"></i>
                      Visa Debit Card
                    </p>
                    <div className="ms-auto">************3456</div>
                  </div>
                </div>
                <div className="d-flex flex-row pb-3">
                  <div className="d-flex align-items-center pe-2">
                    <input type="radio" name="radioNoLabel" id="radioNoLabel1" checked />
                  </div>
                  <div className="rounded border d-flex w-100 p-3 align-items-center">
                    <p className="mb-0">
                      <i className="fab fa-cc-mastercard text-dark pe-2"></i>
                      Mastercard Office
                    </p>
                    <div className="ms-auto">************1038</div>
                  </div>
                </div>
                <button className="btn btn-secondary btn-lg">Proceed to payment</button>
              </div>
            </div>
            <div className="col-md-5 col-xl-4 offset-xl-1">
              <div className="py-4 d-flex justify-content-end">
                <h6>
                  <a href="/cart">Cancel and return to website</a>
                </h6>
              </div>
              <div className="rounded d-flex flex-column p-2" style={{ backgroundColor: "#f8f9fa" }}>
                <div className="p-2 me-3">
                  <h4>Order Recap</h4>
                </div>
                <div className="p-2 d-flex">
                  <div className="col-8">Contracted Price</div>
                  <div className="ms-auto">1,350 RS</div>
                </div>
                <div className="p-2 d-flex">
                  <div className="col-8">TAX Amount</div>
                  <div className="ms-auto">0.00</div>
                </div>
                <div className="p-2 d-flex">
                  <div className="col-8">TAX Amount</div>
                  <div className="ms-auto">0.00</div>
                </div>
                <div className="p-2 d-flex">
                  <div className="col-8">TAX Amount</div>
                  <div className="ms-auto">0.00</div>
                </div>
                <div className="border-top px-2 mx-2"></div>
                <div className="p-2 d-flex pt-3">
                  <div className="col-8">Total TAX Amount</div>
                  <div className="ms-auto">50 RS</div>
                </div>
                <div className="p-2 d-flex">
                  <div className="col-8">
                    Discount
                  </div>
                  <div className="ms-auto">0.00</div>
                </div>
                <div className="border-top px-2 mx-2"></div>
                <div className="p-2 d-flex pt-3">
                  <div className="col-8">shipping</div>
                  <div className="ms-auto">
                    <b>100 RS</b>
                  </div>
                </div>
                <div className="p-2 d-flex">
                  <div className="col-8">
                    Wallet Balance
                  </div>
                  <div className="ms-auto">
                    <b>200 RS</b>
                  </div>
                </div>
                <div className="border-top px-2 mx-2"></div>
                <div className="p-2 d-flex pt-3">
                  <div className="col-8">
                    <b>Total</b>
                  </div>
                  <div className="ms-auto">
                    <b className="text-success">1,350 RS</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br></br>
  

    </>
  )
}

export default Checkout;