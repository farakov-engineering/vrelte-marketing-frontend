import { ArrowUpRight, Clock, CheckCircle2, Users, Zap } from "lucide-react";

const stats = [
  { label: "Total leads", value: "284", badge: "+12 today", icon: Users },
  { label: "Qualified", value: "91", badge: "32% rate", icon: CheckCircle2 },
  { label: "Booked", value: "38", badge: "42% of qualified", icon: Zap },
  { label: "Avg response", value: "74s", badge: "Goal: 90s", icon: Clock },
];

const leads = [
  { name: "Marcus T.", source: "Angi form", channel: "Web form", time: "8:14 am", status: "new" },
  { name: "Sandra K.", source: "Facebook ad", channel: "Facebook", time: "7:52 am", status: "booked" },
  { name: "Derek P.", source: "Google form", channel: "Google", time: "Yesterday", status: "qualified" },
  { name: "Tina M.", source: "Website", channel: "Web form", time: "Yesterday", status: "cold" },
  { name: "James R.", source: "Angi form", channel: "Web form", time: "2 days ago", status: "qualified" },
];

const alerts = [
  { text: "AI couldn't qualify Marcus T. — needs review", time: "Now", urgent: true },
  { text: "Sandra K. booked for tomorrow 10am", time: "7:53am", urgent: false },
  { text: "3 new leads came in overnight", time: "6:00am", urgent: false },
];

const sources = [
  { label: "Web form", pct: 78 },
  { label: "Facebook", pct: 55 },
  { label: "Google", pct: 40 },
  { label: "Angi", pct: 22 },
];

const statusStyles: Record<string, string> = {
  new: "bg-amber-50 text-amber-800 border border-amber-200",
  booked: "bg-blue-50 text-blue-800 border border-blue-200",
  qualified: "bg-green-50 text-green-800 border border-green-200",
  cold: "bg-gray-100 text-gray-500 border border-gray-200",
};

export default function Dashboard() {
  return (
    <div className="space-y-5 max-w-6xl">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white rounded-2xl border border-black/[0.07] p-4"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-gray-400 font-medium">{s.label}</span>
              <div className="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center">
                <s.icon size={13} className="text-amber-600" />
              </div>
            </div>
            <div className="text-2xl font-semibold text-gray-900">{s.value}</div>
            <div className="mt-1.5">
              <span className="inline-block bg-amber-50 text-amber-700 text-[10px] font-medium px-2 py-0.5 rounded-full">
                {s.badge}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent leads */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-gray-900">Recent leads</h2>
          <button className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1 transition-colors">
            View all <ArrowUpRight size={12} />
          </button>
        </div>
        <div className="bg-white rounded-2xl border border-black/[0.07] overflow-hidden">
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr_60px] gap-3 px-4 py-2.5 bg-gray-50/70 border-b border-black/[0.06]">
            {["Name", "Source", "Time", "Status", ""].map((h) => (
              <div key={h} className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                {h}
              </div>
            ))}
          </div>
          {leads.map((lead, i) => (
            <div
              key={i}
              className="grid grid-cols-[2fr_1fr_1fr_1fr_60px] gap-3 px-4 py-3 border-b border-black/[0.05] last:border-b-0 hover:bg-amber-50/30 transition-colors items-center"
            >
              <div>
                <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                <div className="text-xs text-gray-400 mt-0.5">{lead.source}</div>
              </div>
              <div className="text-xs text-gray-500">{lead.channel}</div>
              <div className="text-xs text-gray-500">{lead.time}</div>
              <div>
                <span className={`text-[10px] font-medium px-2 py-1 rounded-full capitalize ${statusStyles[lead.status]}`}>
                  {lead.status}
                </span>
              </div>
              <div>
                <button className="text-xs text-gray-400 hover:text-gray-700 border border-black/10 rounded-lg px-2.5 py-1 hover:bg-gray-50 transition-colors">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Alerts */}
        <div className="bg-white rounded-2xl border border-black/[0.07] p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-gray-900">Alerts</h2>
            <button className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1 transition-colors">
              All alerts <ArrowUpRight size={12} />
            </button>
          </div>
          <div className="space-y-0">
            {alerts.map((a, i) => (
              <div key={i} className="flex items-center gap-3 py-2.5 border-b border-black/[0.05] last:border-b-0">
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${a.urgent ? "bg-red-400" : "bg-amber-400"}`} />
                <span className="text-xs text-gray-700 flex-1">{a.text}</span>
                <span className="text-[10px] text-gray-400 flex-shrink-0">{a.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sources */}
        <div className="bg-white rounded-2xl border border-black/[0.07] p-4">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Lead sources</h2>
          <div className="space-y-3">
            {sources.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <span className="text-xs text-gray-500 w-16 flex-shrink-0">{s.label}</span>
                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-400 rounded-full transition-all duration-500"
                    style={{ width: `${s.pct}%` }}
                  />
                </div>
                <span className="text-xs text-gray-400 w-7 text-right">{s.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
