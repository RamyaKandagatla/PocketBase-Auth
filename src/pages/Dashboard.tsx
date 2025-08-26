import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/auth/useAuth";
import { pb } from "../lib/pb";
import toast from "react-hot-toast";

import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import PlatformBody from "../components/layout/PlatformBody";

export default function Dashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const name = user?.name ?? "(no name)";
  const username = user?.username ?? "(no username)";
  const email = user?.email ?? "(no email)";

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const logout = () => {
    pb.authStore.clear();
    toast.success("Logged out");
    navigate("/login", { replace: true });
  };

  // Lock body scroll when drawer is open (mobile)
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = sidebarOpen ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [sidebarOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSidebarOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen bg-white flex">
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[1px] lg:hidden"
          aria-hidden="true"
        />
      )}

      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onLogout={logout}
      />

      <div className="flex-1 min-w-0 flex flex-col">
        <Topbar
          username={username}
          onLogout={logout}
          onMenu={() => setSidebarOpen(true)}
        />
        <PlatformBody name={name} username={username} email={email} />
      </div>
    </div>
  );
}
