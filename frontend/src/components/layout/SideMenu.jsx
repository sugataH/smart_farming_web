import { NavLink } from "react-router-dom";

export default function SideMenu({ open, onClose }) {
  return (
    <div className={`side-menu ${open ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>✖</button>

      <nav className="menu-links">
        <NavLink to="/" onClick={onClose}>🏠 Dashboard</NavLink>
        <NavLink to="/fields" onClick={onClose}>🌾 Fields</NavLink>
        <NavLink to="/graphs" onClick={onClose}>📊 Graphs</NavLink>
        <NavLink to="/history" onClick={onClose}>📅 History</NavLink>
        <NavLink to="/alerts" onClick={onClose}>🚨 Alerts</NavLink>
        <NavLink to="/settings" onClick={onClose}>⚙ Settings</NavLink>
        <NavLink to="/account" onClick={onClose}>👤 Account</NavLink>
      </nav>
    </div>
  );
}
