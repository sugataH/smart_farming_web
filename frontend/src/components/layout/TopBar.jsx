import { useNavigate } from "react-router-dom";

export default function TopBar({ onMenuClick }) {
  const navigate = useNavigate();

  return (
    <div className="topbar">
      <button className="icon-btn" onClick={() => navigate("/")}>🏠</button>
      <h2>Smart Farming</h2>
      <button className="icon-btn" onClick={onMenuClick}>☰</button>
    </div>
  );
}
