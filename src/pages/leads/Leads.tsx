import { useState } from "react";
import { Search, Filter, ArrowUpRight } from "lucide-react";

type Status = "all" | "new" | "qualified" | "booked" | "cold";

const allLeads = [
  {
    id: 1,
    name: "Marcus T.",
    source: "Angi form",
    channel: "Web form",
    time: "8:14 am",
    status: "new",
    phone: "+1 312 555 0101",
    job: "Roof inspection",
  },
  {
    id: 2,
    name: "Sandra K.",
    source: "Facebook ad",
    channel: "Facebook",
    time: "7:52 am",
    status: "booked",
    phone: "+1 312 555 0182",
    job: "HVAC service",
  },
  {
    id: 3,
    name: "Derek P.",
    source: "Google form",
    channel: "Google",
    time: "Yesterday",
    status: "qualified",
    phone: "+1 773 555 0143",
    job: "Plumbing repair",
  },
  {
    id: 4,
    name: "Tina M.",
    source: "Website",
    channel: "Web form",
    time: "Yesterday",
    status: "cold",
    phone: "+1 312 555 0167",
    job: "Landscaping",
  },
  {
    id: 5,
    name: "James R.",
    source: "Angi form",
    channel: "Angi",
    time: "2 days ago",
    status: "qualified",
    phone: "+1 708 555 0129",
    job: "Electrical work",
  },
  {
    id: 6,
    name: "Priya S.",
    source: "Google ad",
    channel: "Google",
    time: "2 days ago",
    status: "booked",
    phone: "+1 312 555 0195",
    job: "Window cleaning",
  },
  {
    id: 7,
    name: "Carlos M.",
    source: "Website",
    channel: "Web form",
    time: "3 days ago",
    status: "new",
    phone: "+1 773 555 0111",
    job: "Fence install",
  },
  {
    id: 8,
    name: "Rachel B.",
    source: "Facebook ad",
    channel: "Facebook",
    time: "3 days ago",
    status: "cold",
    phone: "+1 312 555 0134",
    job: "Painting",
  },
];

const statusStyles: Record<string, string> = {
  new: "bg-amber-50 text-amber-800 border border-amber-200",
  booked: "bg-blue-50 text-blue-800 border border-blue-200",
  qualified: "bg-green-50 text-green-800 border border-green-200",
  cold: "bg-gray-100 text-gray-500 border border-gray-200",
};

const filters: { label: string; value: Status }[] = [
  { label: "All", value: "all" },
  { label: "New", value: "new" },
  { label: "Qualified", value: "qualified" },
  { label: "Booked", value: "booked" },
  { label: "Cold", value: "cold" },
];

export default function Leads() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<Status>("all");

  const filtered = allLeads.filter((l) => {
    const matchStatus = activeFilter === "all" || l.status === activeFilter;
    const matchSearch =
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.job.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <div className="max-w-6xl space-y-4">
      {/* Toolbar */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 min-w-48">
          <Search
            size={13}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search leads..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-8 pr-3 py-2 text-sm bg-white border border-black/[0.08] rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent placeholder:text-gray-400"
          />
        </div>
        <div className="flex items-center gap-1.5 bg-white border border-black/[0.08] rounded-xl p-1">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                activeFilter === f.value
                  ? "bg-amber-400 text-amber-900"
                  : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-2 px-3 py-2 text-xs text-gray-500 bg-white border border-black/[0.08] rounded-xl hover:bg-gray-50 transition-colors">
          <Filter size={12} />
          Filter
        </button>
      </div>

      {/* Count */}
      <div className="text-xs text-gray-400">
        {filtered.length} lead{filtered.length !== 1 ? "s" : ""}
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-black/[0.07] overflow-hidden">
        <div className="grid grid-cols-[2fr_1.2fr_1fr_1fr_1fr_60px] gap-3 px-4 py-2.5 bg-gray-50/70 border-b border-black/[0.06]">
          {["Name", "Job type", "Channel", "Time", "Status", ""].map((h) => (
            <div
              key={h}
              className="text-[10px] font-semibold uppercase tracking-wider text-gray-400"
            >
              {h}
            </div>
          ))}
        </div>
        {filtered.length === 0 ? (
          <div className="py-16 text-center text-sm text-gray-400">
            No leads found
          </div>
        ) : (
          filtered.map((lead) => (
            <div
              key={lead.id}
              className="grid grid-cols-[2fr_1.2fr_1fr_1fr_1fr_60px] gap-3 px-4 py-3 border-b border-black/[0.05] last:border-b-0 hover:bg-amber-50/30 transition-colors items-center"
            >
              <div>
                <div className="text-sm font-medium text-gray-900">
                  {lead.name}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">{lead.phone}</div>
              </div>
              <div className="text-xs text-gray-600">{lead.job}</div>
              <div className="text-xs text-gray-500">{lead.channel}</div>
              <div className="text-xs text-gray-500">{lead.time}</div>
              <div>
                <span
                  className={`text-[10px] font-medium px-2 py-1 rounded-full capitalize ${statusStyles[lead.status]}`}
                >
                  {lead.status}
                </span>
              </div>
              <div>
                <button className="text-xs text-gray-400 hover:text-gray-700 border border-black/10 rounded-lg px-2.5 py-1 hover:bg-gray-50 transition-colors flex items-center gap-1">
                  View <ArrowUpRight size={10} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
