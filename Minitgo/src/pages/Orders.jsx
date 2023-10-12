import Header from '../components/header'
import { Link } from "react-router-dom";
import Imgs from'../components/images/men.jpg'
import Footer from '../components/Footer'
 
const OrdersPage = () => {
  return (
    <>
      <Header />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <section className="h-100 gradient-custom" style={{ backgroundColor: "" }}>
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-lg-10 col-xl-8">
              <div className="card" style={{ borderRadius: "10px" }}>
                <div className="card-header px-4 py-5">
                  <h5 className="text-muted mb-0">
                    Thanks for your Order,{" "}
                    <span style={{ color: "black" }}>Hemang Krishna Chaitanya</span>!
                  </h5>
                </div>
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <p className="lead fw-normal mb-0" style={{ color: "#d8dfab" }}>
                      Receipt
                    </p>
                    <p className="small text-muted mb-0">
                      Receipt Voucher : 1KAU9-84UIL
                    </p>
                  </div>

                  <div className="card shadow-0 border mb-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-2">
                          <img
                            src={Imgs}
                            className="img-fluid"
                            alt="Phone"
                          />
                        </div>
                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                          <p className="text-muted mb-0">Item Name</p>
                        </div>
                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                          <p className="text-muted mb-0 small">Item clor</p>
                        </div>
                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                          <p className="text-muted mb-0 small">Item fabric</p>
                        </div>
                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                          <p className="text-muted mb-0 small">Qty: 1</p>
                        </div>
                        <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                          <p className="text-muted mb-0 small">599 RS</p>
                        </div>
                      </div>
                      <hr className="mb-4" style={{ backgroundColor: "#e0e0e0", opacity: 1 }} />

                      <div className="row">
                      <div className="col-md-2">
                          <p className="text-muted small">Track Order</p>
                        </div>
                        <div className="col-md-10">
                          <div className="progress" style={{ height: "6px", borderRadius: "16px" }}>
                            <div className="progress-bar" role="progressbar" style={{ width: "65%", borderRadius: "16px", backgroundColor: "#E4D6D2" }}></div>
                          </div>
                          <div className="d-flex justify-content-between mb-1">
                            <p className="">Out for delivery</p>
                            <p className="">Delivered</p>
                          </div>

                          <div className="d-flex justify-content-between pt-2">
                    <p className="fw-bold mb-0">Order Details</p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">Total</span> 1,198.00
                    </p>
                  </div>

                  <div className="d-flex justify-content-between pt-2">
                    <p className="text-muted mb-0">Invoice Number : 788152</p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">Discount</span> 300.00
                    </p>
                  </div>

                  <div className="d-flex justify-content-between">
                    <p className="text-muted mb-0">Invoice Date : 22 Dec, 2019</p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">GST 18%</span> 150 RS
                    </p>
                  </div>

                  <div className="d-flex justify-content-between mb-5">
                    <p className="text-muted mb-0">Receipt Voucher : 18KU-62IIK</p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">Delivery Charges</span> Free
                    </p>
                  </div>
                  </div>

                  <div className='d-flex align-items-center py-3'>

                  <Link to="/" className="btn btn-primary mx-1" role="button" aria-disabled="">Track</Link>

                  <Link to="/" className="btn btn-light border rounded-pill mx-1" role="button" aria-disabled="">Feedback</Link>

                  <Link to="/" className="btn btn-light border rounded-pill mx-1" role="button" aria-disabled="">Return</Link>

                  <Link to="/" className="btn btn-light border rounded-pill mx-1" role="button" aria-disabled="">Review</Link>
                  </div>

                 <div className="card-footer border-0 px-4 py-2" style={{ backgroundColor: "#E4D6D2", borderRadius: "50px" }}>
                  <h5 className="d-flex align-items-center justify-content-end text-dark text-uppercase mb-0">
                    Total paid: <span className="h2 mb-0 ms-2">1,048 RS</span>
                  </h5>
                </div>

                        </div>
                      </div>
                    </div>
                  </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default OrdersPage;