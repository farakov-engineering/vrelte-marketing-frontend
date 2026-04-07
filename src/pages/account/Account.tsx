import { useState } from "react";
import { Link2, Check } from "lucide-react";

export default function Account() {
  const [saved, setSaved] = useState(false);
  const [name, setName] = useState("Chris Farah");
  const [email, setEmail] = useState("chris@vrelte.com");
  const [bizName, setBizName] = useState("");
  const [phone, setPhone] = useState("");
  const [gcal, setGcal] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState(true);
  const [notifyText, setNotifyText] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-2xl space-y-5">

      {/* Profile */}
      <div className="bg-white rounded-2xl border border-black/[0.07] p-5">
        <h2 className="text-sm font-semibold text-gray-900 mb-4">Profile</h2>
        <div className="flex items-center gap-4 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-amber-400 flex items-center justify-center text-amber-900 font-semibold text-lg flex-shrink-0">
            CF
          </div>
          <div>
            <div className="text-sm font-medium text-gray-900">{name || "Your name"}</div>
            <div className="text-xs text-gray-400 mt-0.5">{email}</div>
          </div>
        </div>
        <div className="space-y-3">
          {[
            { label: "Full name", value: name, set: setName, placeholder: "Your name" },
            { label: "Email", value: email, set: setEmail, placeholder: "you@example.com" },
            { label: "Business name", value: bizName, set: setBizName, placeholder: "Optional" },
            { label: "Phone number", value: phone, set: setPhone, placeholder: "+1 312 555 0100" },
          ].map((f) => (
            <div key={f.label}>
              <label className="block text-xs text-gray-500 mb-1">{f.label}</label>
              <input
                type="text"
                value={f.value}
                onChange={(e) => f.set(e.target.value)}
                placeholder={f.placeholder}
                className="w-full text-sm px-3 py-2 bg-gray-50 border border-black/[0.08] rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent placeholder:text-gray-400"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Integrations */}
      <div className="bg-white rounded-2xl border border-black/[0.07] p-5">
        <h2 className="text-sm font-semibold text-gray-900 mb-1">Integrations</h2>
        <p className="text-xs text-gray-400 mb-4">Connect services to automate your workflow.</p>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 rounded-xl border border-black/[0.07] bg-gray-50/50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white border border-black/[0.08] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-800">Google Calendar</div>
                <div className="text-xs text-gray-400">Auto-book appointments</div>
              </div>
            </div>
            <button
              onClick={() => setGcal(!gcal)}
              className={`flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors ${
                gcal
                  ? "bg-green-50 border-green-200 text-green-700"
                  : "bg-white border-black/[0.08] text-gray-600 hover:bg-gray-50"
              }`}
            >
              {gcal ? <><Check size={12} /> Connected</> : <><Link2 size={12} /> Connect</>}
            </button>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-2xl border border-black/[0.07] p-5">
        <h2 className="text-sm font-semibold text-gray-900 mb-1">Notifications</h2>
        <p className="text-xs text-gray-400 mb-4">How you want to be alerted about lead activity.</p>
        <div className="space-y-3">
          {[
            { label: "Email alerts", sub: "Get notified by email for urgent leads", value: notifyEmail, set: setNotifyEmail },
            { label: "Text alerts", sub: "Get a text when a lead needs manual review", value: notifyText, set: setNotifyText },
          ].map((n) => (
            <div key={n.label} className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-800">{n.label}</div>
                <div className="text-xs text-gray-400 mt-0.5">{n.sub}</div>
              </div>
              <button
                onClick={() => n.set(!n.value)}
                className={`w-10 h-5.5 rounded-full transition-colors relative flex-shrink-0 ${
                  n.value ? "bg-amber-400" : "bg-gray-200"
                }`}
                style={{ width: 40, height: 22 }}
              >
                <span
                  className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                    n.value ? "translate-x-5" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Save */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className={`flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl transition-colors ${
            saved
              ? "bg-green-100 text-green-800 border border-green-200"
              : "bg-amber-400 text-amber-900 hover:bg-amber-500"
          }`}
        >
          {saved ? <><Check size={14} /> Saved</> : "Save changes"}
        </button>
      </div>
    </div>
  );
}
