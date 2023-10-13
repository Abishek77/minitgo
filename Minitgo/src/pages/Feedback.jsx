export const Feedback = () => {
    return (
      <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <div className="text-center">
                <i className="far fa-file-alt mb-3 text-primary"></i>
                <p>
                  <strong>Your opinion matters</strong>
                </p>
                <p>
                  Have some ideas on how to improve our product?
                  <strong>Give us your feedback.</strong>
                </p>
              </div>
              <hr />
              <form className="px-4" action="">
                <p className="text-center">
                  <strong>Your rating:</strong>
                </p>
                <div className="form-check">
                  <input type="radio" name="flexRadioDefault" id="flexRadioDefault1" className="form-check-input" defaultChecked />
                  <label htmlFor="flexRadioDefault1" className="form-check-label">Very good</label>
                </div>
                <div className="form-check">
                  <input type="radio" name="flexRadioDefault" id="flexRadioDefault2" className="form-check-input" />
                  <label htmlFor="flexRadioDefault2" className="form-check-label">Good</label>
                </div>
                <div className="form-check">
                  <input type="radio" name="flexRadioDefault" id="flexRadioDefault3" className="form-check-input" />
                  <label htmlFor="flexRadioDefault3" className="form-check-label">Mediocre</label>
                </div>
                <div className="form-check">
                  <input type="radio" name="flexRadioDefault" id="flexRadioDefault4" className="form-check-input" />
                  <label htmlFor="flexRadioDefault4" className="form-check-label">Bad</label>
                </div>
                <div className="form-check">
                  <input type="radio" name="flexRadioDefault" id="flexRadioDefault5" className="form-check-input" />
                  <label htmlFor="flexRadioDefault5" className="form-check-label">Very bad</label>
                </div>
  
                {/* Add text input for feedback */}
                <div className="mb-3">
                  <label htmlFor="feedbackText" className="form-label"><strong>Your feedback:</strong></label>
                  <textarea className="form-control" id="feedbackText" rows="4"></textarea>
                </div>
  
              </form>
            </div>
            <div className="card-footer">
              <div className="text-end">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
  