import { AlertCircle, CheckCircle2, Info, Clock } from "lucide-react";

type AlertType = "urgent" | "success" | "info";

const alerts = [
  { id: 1, type: "urgent" as AlertType, title: "AI couldn't qualify Marcus T.", body: "Lead came in via Angi at 8:14am. Missing: job type, address. Needs manual review.", time: "Just now" },
  { id: 2, type: "success" as AlertType, title: "Sandra K. booked successfully", body: "Appointment confirmed for tomorrow at 10:00am. Google Calendar updated.", time: "7:53am" },
  { id: 3, type: "info" as AlertType, title: "3 new leads came in overnight", body: "Between 11pm and 6am. All received auto-text within 90 seconds.", time: "6:00am" },
  { id: 4, type: "info" as AlertType, title: "Weekly summary ready", body: "284 total leads this week. 38 booked. Average response time: 74 seconds.", time: "Yesterday" },
  { id: 5, type: "urgent" as AlertType, title: "Lead response timeout — Carlos M.", body: "No reply after 3 follow-up texts. Lead marked as cold automatically.", time: "2 days ago" },
  { id: 6, type: "success" as AlertType, title: "Priya S. booked successfully", body: "Appointment confirmed for Friday 2pm. Confirmation text sent.", time: "2 days ago" },
];

const typeConfig = {
  urgent: {
    icon: AlertCircle,
    bg: "bg-red-50",
    border: "border-red-200",
    iconColor: "text-red-500",
    dot: "bg-red-400",
  },
  success: {
    icon: CheckCircle2,
    bg: "bg-green-50",
    border: "border-green-200",
    iconColor: "text-green-500",
    dot: "bg-green-400",
  },
  info: {
    icon: Info,
    bg: "bg-blue-50",
    border: "border-blue-200",
    iconColor: "text-blue-500",
    dot: "bg-blue-400",
  },
};

export default function Alerts() {
  const urgent = alerts.filter((a) => a.type === "urgent");
  const rest = alerts.filter((a) => a.type !== "urgent");

  return (
    <div className="max-w-3xl space-y-5">
      {urgent.length > 0 && (
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2.5">
            Needs attention
          </h2>
          <div className="space-y-2">
            {urgent.map((a) => {
              const cfg = typeConfig[a.type];
              return (
                <div key={a.id} className={`rounded-2xl border p-4 ${cfg.bg} ${cfg.border}`}>
                  <div className="flex items-start gap-3">
                    <cfg.icon size={16} className={`mt-0.5 flex-shrink-0 ${cfg.iconColor}`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-medium text-gray-900">{a.title}</span>
                        <span className="text-xs text-gray-400 flex-shrink-0 flex items-center gap-1">
                          <Clock size={10} />{a.time}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 leading-5">{a.body}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex gap-2 pl-7">
                    <button className="text-xs px-3 py-1.5 bg-white border border-black/10 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                      Review lead
                    </button>
                    <button className="text-xs px-3 py-1.5 text-gray-400 hover:text-gray-600 transition-colors">
                      Dismiss
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2.5">
          Recent activity
        </h2>
        <div className="bg-white rounded-2xl border border-black/[0.07] overflow-hidden">
          {rest.map((a, i) => {
            const cfg = typeConfig[a.type];
            return (
              <div
                key={a.id}
                className={`flex items-start gap-3 px-4 py-3.5 ${i < rest.length - 1 ? "border-b border-black/[0.05]" : ""} hover:bg-gray-50/50 transition-colors`}
              >
                <cfg.icon size={15} className={`mt-0.5 flex-shrink-0 ${cfg.iconColor}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-gray-800">{a.title}</span>
                    <span className="text-xs text-gray-400 flex-shrink-0 flex items-center gap-1">
                      <Clock size={10} />{a.time}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5 leading-5">{a.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
