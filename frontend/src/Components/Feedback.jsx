export function Feedback() {
  return (
    <>
    <div>
      <div className="container my-5">
        <h1 className="text-center mb-4">Thank you for your submission</h1>
        <p className="lead text-center mb-5">Your Patient Metric Score is</p>
        <div className="d-flex justify-content-center mb-5">
          <div className="score-container">
            <p className="score">8.5</p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
        <a className="btn btn-warning btn-lg" href="/" role="button">Back to Home</a>
          {/* <button className="btn btn-warning btn-lg">Back to Home</button> */}
        </div>
      </div>
    </div>
    </>
  );
}
