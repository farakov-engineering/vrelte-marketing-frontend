import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

const bookings = [
  { date: "2026-04-07", time: "10:00am", name: "Sandra K.", job: "HVAC service", color: "bg-amber-100 border-amber-300 text-amber-900" },
  { date: "2026-04-09", time: "2:00pm", name: "Priya S.", job: "Window cleaning", color: "bg-blue-100 border-blue-300 text-blue-900" },
  { date: "2026-04-09", time: "4:30pm", name: "Derek P.", job: "Plumbing repair", color: "bg-green-100 border-green-300 text-green-900" },
  { date: "2026-04-14", time: "9:00am", name: "James R.", job: "Electrical work", color: "bg-amber-100 border-amber-300 text-amber-900" },
  { date: "2026-04-17", time: "11:00am", name: "Carlos M.", job: "Fence install", color: "bg-blue-100 border-blue-300 text-blue-900" },
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export default function CalendarPage() {
  const today = new Date(2026, 3, 6); // April 6 2026
  const [current, setCurrent] = useState({ year: 2026, month: 3 });

  const daysInMonth = getDaysInMonth(current.year, current.month);
  const firstDay = getFirstDayOfMonth(current.year, current.month);

  const prevMonth = () => {
    setCurrent((c) =>
      c.month === 0 ? { year: c.year - 1, month: 11 } : { ...c, month: c.month - 1 }
    );
  };
  const nextMonth = () => {
    setCurrent((c) =>
      c.month === 11 ? { year: c.year + 1, month: 0 } : { ...c, month: c.month + 1 }
    );
  };

  const getBookingsForDay = (day: number) => {
    const dateStr = `${current.year}-${String(current.month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return bookings.filter((b) => b.date === dateStr);
  };

  const cells = Array.from({ length: firstDay }, (_, i) => ({ day: null, key: `empty-${i}` })).concat(
    Array.from({ length: daysInMonth }, (_, i) => ({ day: i + 1, key: `day-${i + 1}` }))
  );

  const isToday = (day: number | null) =>
    day !== null &&
    day === today.getDate() &&
    current.month === today.getMonth() &&
    current.year === today.getFullYear();

  return (
    <div className="max-w-5xl space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={prevMonth} className="w-8 h-8 flex items-center justify-center rounded-xl border border-black/[0.08] bg-white hover:bg-gray-50 transition-colors">
            <ChevronLeft size={14} />
          </button>
          <h2 className="text-sm font-semibold text-gray-900 min-w-36 text-center">
            {MONTHS[current.month]} {current.year}
          </h2>
          <button onClick={nextMonth} className="w-8 h-8 flex items-center justify-center rounded-xl border border-black/[0.08] bg-white hover:bg-gray-50 transition-colors">
            <ChevronRight size={14} />
          </button>
        </div>
        <button className="flex items-center gap-2 px-3 py-2 bg-amber-400 text-amber-900 text-xs font-medium rounded-xl hover:bg-amber-500 transition-colors">
          <Plus size={13} />
          Add booking
        </button>
      </div>

      {/* Calendar grid */}
      <div className="bg-white rounded-2xl border border-black/[0.07] overflow-hidden">
        {/* Day headers */}
        <div className="grid grid-cols-7 border-b border-black/[0.06]">
          {DAYS.map((d) => (
            <div key={d} className="py-2.5 text-center text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              {d}
            </div>
          ))}
        </div>
        {/* Day cells */}
        <div className="grid grid-cols-7">
          {cells.map((cell, idx) => {
            const dayBookings = cell.day ? getBookingsForDay(cell.day) : [];
            const todayCell = isToday(cell.day);
            return (
              <div
                key={cell.key}
                className={`min-h-20 p-2 border-b border-r border-black/[0.05] last:border-r-0 ${
                  (idx + 1) % 7 === 0 ? "border-r-0" : ""
                } ${cell.day ? "hover:bg-amber-50/20 cursor-pointer transition-colors" : "bg-gray-50/40"}`}
              >
                {cell.day && (
                  <>
                    <div className={`w-6 h-6 flex items-center justify-center rounded-full text-xs font-medium mb-1 ${
                      todayCell ? "bg-amber-400 text-amber-900" : "text-gray-700"
                    }`}>
                      {cell.day}
                    </div>
                    <div className="space-y-0.5">
                      {dayBookings.map((b, bi) => (
                        <div key={bi} className={`text-[10px] px-1.5 py-0.5 rounded border truncate leading-4 ${b.color}`}>
                          {b.time} {b.name}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming */}
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2.5">Upcoming bookings</h2>
        <div className="space-y-2">
          {bookings.slice(0, 4).map((b, i) => (
            <div key={i} className="bg-white rounded-2xl border border-black/[0.07] px-4 py-3 flex items-center gap-4">
              <div className={`w-1.5 h-10 rounded-full ${b.color.includes("amber") ? "bg-amber-400" : b.color.includes("blue") ? "bg-blue-400" : "bg-green-400"}`} />
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">{b.name}</div>
                <div className="text-xs text-gray-400 mt-0.5">{b.job}</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-medium text-gray-700">{b.time}</div>
                <div className="text-xs text-gray-400 mt-0.5">{b.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
