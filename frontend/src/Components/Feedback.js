import "../Styles/Feedback.css";

export function Feedback() {
  return (
    <div className="feedback-container">
      <h1 className="feedback-heading">Thank you for submitting</h1>
      <p className="feedback-score-label">Patient Metric Score</p>
      <p className="feedback-message">
        Your PMS score is <span className="feedback-score">8.5</span>.
      </p>

      <button className="feedback-btn">Back to Home</button>
    </div>
  );
}
