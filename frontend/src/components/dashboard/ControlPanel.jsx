export default function ControlPanel({ pumpOn, setPumpOn }) {
  return (
    <div className="control-panel">
      <h3>Device Control</h3>
      <button
        className={`control-btn ${pumpOn ? "on" : "off"}`}
        onClick={() => setPumpOn(!pumpOn)}
      >
        Pump {pumpOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}
