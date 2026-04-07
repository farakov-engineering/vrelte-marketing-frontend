import { useState } from "react";
import { Plus, X, ChevronDown } from "lucide-react";

const defaultFields = ["Name", "Phone number", "Job type", "Address", "Urgency"];

export default function Configure() {
  const [fields, setFields] = useState(defaultFields);
  const [newField, setNewField] = useState("");
  const [responseStyle, setResponseStyle] = useState("friendly");
  const [followUp1, setFollowUp1] = useState("1");
  const [followUp2, setFollowUp2] = useState("24");
  const [firstMessage, setFirstMessage] = useState(
    "Hey {{name}}! Thanks for reaching out. We got your request and will follow up shortly. Can I grab a couple quick details to get you sorted?"
  );

  const addField = () => {
    if (newField.trim()) {
      setFields([...fields, newField.trim()]);
      setNewField("");
    }
  };

  const removeField = (i: number) => {
    setFields(fields.filter((_, idx) => idx !== i));
  };

  return (
    <div className="max-w-2xl space-y-5">

      {/* Fields to gather */}
      <div className="bg-white rounded-2xl border border-black/[0.07] p-5">
        <h2 className="text-sm font-semibold text-gray-900 mb-1">Fields to gather</h2>
        <p className="text-xs text-gray-400 mb-4">The AI will ask each lead for these details before qualifying them.</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {fields.map((f, i) => (
            <div key={i} className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-900 text-xs px-3 py-1.5 rounded-full">
              {f}
              <button onClick={() => removeField(i)} className="hover:text-red-500 transition-colors">
                <X size={11} />
              </button>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add a field..."
            value={newField}
            onChange={(e) => setNewField(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addField()}
            className="flex-1 text-sm px-3 py-2 bg-gray-50 border border-black/[0.08] rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent placeholder:text-gray-400"
          />
          <button
            onClick={addField}
            className="flex items-center gap-1.5 px-3 py-2 bg-amber-400 text-amber-900 text-xs font-medium rounded-xl hover:bg-amber-500 transition-colors"
          >
            <Plus size={13} /> Add
          </button>
        </div>
      </div>

      {/* Response style */}
      <div className="bg-white rounded-2xl border border-black/[0.07] p-5">
        <h2 className="text-sm font-semibold text-gray-900 mb-1">Response style</h2>
        <p className="text-xs text-gray-400 mb-4">How the AI should sound when texting your leads.</p>
        <div className="grid grid-cols-3 gap-2">
          {["friendly", "professional", "brief"].map((style) => (
            <button
              key={style}
              onClick={() => setResponseStyle(style)}
              className={`py-2.5 rounded-xl border text-xs font-medium capitalize transition-colors ${
                responseStyle === style
                  ? "bg-amber-400 border-amber-400 text-amber-900"
                  : "bg-white border-black/[0.08] text-gray-600 hover:bg-gray-50"
              }`}
            >
              {style}
            </button>
          ))}
        </div>
      </div>

      {/* First message */}
      <div className="bg-white rounded-2xl border border-black/[0.07] p-5">
        <h2 className="text-sm font-semibold text-gray-900 mb-1">First text message</h2>
        <p className="text-xs text-gray-400 mb-3">Sent automatically within 90 seconds of a new lead. Use <code className="bg-gray-100 px-1 py-0.5 rounded text-amber-700">{"{{name}}"}</code> to personalize.</p>
        <textarea
          value={firstMessage}
          onChange={(e) => setFirstMessage(e.target.value)}
          rows={4}
          className="w-full text-sm px-3 py-2.5 bg-gray-50 border border-black/[0.08] rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-transparent leading-6 resize-none"
        />
        <div className="text-xs text-gray-400 mt-1.5 text-right">{firstMessage.length} chars</div>
      </div>

      {/* Follow-up timing */}
      <div className="bg-white rounded-2xl border border-black/[0.07] p-5">
        <h2 className="text-sm font-semibold text-gray-900 mb-1">Follow-up timing</h2>
        <p className="text-xs text-gray-400 mb-4">If a lead doesn't reply, send follow-ups at these intervals.</p>
        <div className="space-y-3">
          {[
            { label: "First follow-up", value: followUp1, set: setFollowUp1 },
            { label: "Second follow-up", value: followUp2, set: setFollowUp2 },
          ].map((f) => (
            <div key={f.label} className="flex items-center justify-between">
              <span className="text-sm text-gray-700">{f.label}</span>
              <div className="relative">
                <select
                  value={f.value}
                  onChange={(e) => f.set(e.target.value)}
                  className="appearance-none bg-gray-50 border border-black/[0.08] text-sm text-gray-700 rounded-xl px-3 py-1.5 pr-7 focus:outline-none focus:ring-2 focus:ring-amber-300"
                >
                  <option value="0.5">30 minutes</option>
                  <option value="1">1 hour</option>
                  <option value="3">3 hours</option>
                  <option value="24">24 hours</option>
                  <option value="48">48 hours</option>
                </select>
                <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Save */}
      <div className="flex justify-end">
        <button className="px-5 py-2.5 bg-amber-400 text-amber-900 text-sm font-medium rounded-xl hover:bg-amber-500 transition-colors">
          Save configuration
        </button>
      </div>
    </div>
  );
}
