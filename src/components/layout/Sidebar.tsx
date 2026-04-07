import { useState } from "react";
import { NavLink } from "react-router";
import {
  LayoutDashboard,
  Users,
  Bell,
  Calendar,
  Settings2,
  UserCircle,
  Zap,
} from "lucide-react";

const navSections = [
  {
    label: null,
    items: [
      {
        to: "/dashboard",
        label: "Dashboard",
        icon: LayoutDashboard,
        end: true,
      },
    ],
  },
  {
    label: "Leads",
    items: [
      { to: "/leads", label: "Leads", icon: Users },
      { to: "/alerts", label: "Alerts", icon: Bell },
      { to: "/calendar", label: "Calendar", icon: Calendar },
    ],
  },
  {
    label: "System",
    items: [
      { to: "/configure", label: "Configure", icon: Settings2 },
      { to: "/account", label: "Account", icon: UserCircle },
    ],
  },
];

export default function Sidebar() {
  const [hovered, setHovered] = useState(false);

  return (
    <aside
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        flex flex-col min-h-screen border-r border-black/[0.08] bg-white
        transition-all duration-200 ease-in-out flex-shrink-0
        ${hovered ? "w-52" : "w-14"}
      `}
    >
      {/* Brand */}
      <div className="h-14 border-b border-black/[0.08] flex items-center px-3 gap-3 overflow-hidden whitespace-nowrap">
        <img src="/logo.png" className="h-8 w-8" alt="logo" />
        <span
          className={`text-sm font-semibold text-gray-900 transition-opacity duration-150 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          Vrelte
        </span>
      </div>

      {/* Nav */}
      <div className="flex-1 overflow-y-auto p-2 flex flex-col gap-1">
        {navSections.map((section, si) => (
          <div key={si} className={si > 0 ? "mt-2" : ""}>
            {section.label && (
              <div
                className={`px-2 pb-1 pt-1 text-[10px] font-semibold uppercase tracking-widest text-black/30 whitespace-nowrap transition-opacity duration-100 ${
                  hovered ? "opacity-100" : "opacity-0"
                }`}
              >
                {section.label}
              </div>
            )}
            {section.items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={"end" in item ? item.end : false}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-2 py-2 text-sm font-medium transition-colors whitespace-nowrap overflow-hidden
                  ${
                    isActive
                      ? "bg-amber-400 text-amber-900"
                      : "text-black/50 hover:bg-black/5 hover:text-black/80"
                  }
                  ${!hovered ? "justify-center" : ""}`
                }
                title={!hovered ? item.label : undefined}
              >
                <item.icon size={16} className="flex-shrink-0" />
                <span
                  className={`transition-opacity duration-100 ${
                    hovered ? "opacity-100" : "opacity-0 w-0"
                  }`}
                >
                  {item.label}
                </span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}
