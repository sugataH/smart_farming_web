import { useState } from "react";
import TopBar from "./TopBar";
import SideMenu from "./SideMenu";

export default function MainLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <TopBar onMenuClick={() => setMenuOpen(true)} />
      <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="page">{children}</div>
    </>
  );
}
