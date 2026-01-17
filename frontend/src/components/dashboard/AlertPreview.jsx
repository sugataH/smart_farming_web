export default function AlertPreview({ alerts }) {
  return (
    <div className="alert-box">
      <h3>Alerts</h3>
      {alerts.length === 0 && <p className="no-alert">No alerts</p>}
      {alerts.map((a, i) => (
        <div key={i} className={`alert ${a.type}`}>
          {a.message}
        </div>
      ))}
    </div>
  );
}
