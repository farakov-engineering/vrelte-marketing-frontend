import { Bell, UserCircle, Menu } from "lucide-react";
import { useNavigate } from "react-router";

interface TopbarProps {
  title: string;
  onMenuClick?: () => void;
}

export default function Topbar({ title, onMenuClick }: TopbarProps) {
  const navigate = useNavigate();

  return (
    <div className="h-14 border-b border-black/[0.08] bg-white flex items-center justify-between px-5">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg border border-black/10 hover:bg-black/5 transition-colors"
        >
          <Menu size={15} />
        </button>
        <h1 className="text-sm font-semibold text-gray-900">{title}</h1>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => navigate("/alerts")}
          className="w-8 h-8 flex items-center justify-center rounded-lg border border-black/10 hover:bg-black/5 transition-colors relative"
        >
          <Bell size={15} className="text-gray-500" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
        </button>
        <button
          onClick={() => navigate("/account")}
          className="w-8 h-8 flex items-center justify-center rounded-lg border border-black/10 hover:bg-black/5 transition-colors"
        >
          <UserCircle size={15} className="text-gray-500" />
        </button>
      </div>
    </div>
  );
}
