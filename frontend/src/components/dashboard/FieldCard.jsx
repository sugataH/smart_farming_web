import { useState } from "react";

export default function FieldCard({ field }) {
  const [pumpOn, setPumpOn] = useState(false);

  return (
    <div className="field-card">
      <h3>{field.crop}</h3>
      <p>Status: <strong>{field.status}</strong></p>

      <div className="metrics">
        <span>🌡 {field.temperature}</span>
        <span>💧 {field.humidity}</span>
        <span>🌱 {field.soil}</span>
        <span>☔ {field.rainfall}</span>
      </div>

      {field.ph && (
        <div className="ph-box">
          <p>Soil pH: {field.ph}</p>
          <small>Recommended: {field.phRecommendation}</small>
        </div>
      )}

      <button
        className={`pump-btn ${pumpOn ? "on" : "off"}`}
        onClick={() => setPumpOn(!pumpOn)}
      >
        Pump {pumpOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}
