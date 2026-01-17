import { useNavigate } from "react-router-dom";

export default function TimelinePreview() {
  const navigate = useNavigate();

  return (
    <div className="timeline" onClick={() => navigate("/graphs")}>
      <h3>Monthly Overview</h3>
      <p>Tap to view detailed graphs</p>
      <div className="timeline-bar"></div>
    </div>
  );
}
