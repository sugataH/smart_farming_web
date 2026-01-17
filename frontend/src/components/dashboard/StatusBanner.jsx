export default function StatusBanner({ sensors }) {
  const hasDanger = sensors.some((s) => s.level === "danger");
  const hasWarning = sensors.some((s) => s.level === "warning");

  let status = "Healthy";
  if (hasDanger) status = "Critical";
  else if (hasWarning) status = "Warning";

  return (
    <div className={`status-banner ${status.toLowerCase()}`}>
      Farm Status: <strong>{status}</strong>
    </div>
  );
}
