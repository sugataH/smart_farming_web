export default function SensorCard({ data }) {
  return (
    <div className={`sensor-card ${data.level}`}>
      <div className="sensor-icon">{data.icon}</div>
      <div className="sensor-value">{data.value}</div>
      <div className="sensor-label">{data.label}</div>
    </div>
  );
}
