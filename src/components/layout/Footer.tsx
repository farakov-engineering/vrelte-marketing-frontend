import { Info, Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "How it works", href: "#how-it-works", icon: Info },
    { label: "Example", href: "#example", icon: Info },
    { label: "Book demo", href: "#pricing", icon: Phone },
    { label: "Contact us", href: "#pricing", icon: Mail },
  ];

  return (
    <>
      {/* overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <div className="fixed bottom-6 left-6 z-50">
        {/* button */}
        <div
          onClick={() => setOpen(!open)}
          className="flex h-16 w-16 items-center justify-center rounded-full border border-[#E5D3A3] bg-white shadow-lg cursor-pointer"
        >
          {open ? (
            <X className="text-[#2A2114]" size={28} />
          ) : (
            <Menu className="text-[#2A2114]" size={28} />
          )}
        </div>

        {/* menu */}
        {open && (
          <div
            className="absolute bottom-20 left-0 min-w-[260px] rounded-2xl rounded-bl-md border border-[#EFE3C7] bg-white p-4 shadow-xl"
            onClick={() => setOpen(false)}
          >
            {/* header */}
            <div className="mb-4 px-2">
              <p className="text-sm font-semibold text-[#2A2114]">Vrelte</p>
              <p className="text-xs text-[#7C6A44]">AI lead qualification</p>
            </div>

            {/* links */}
            <div className="space-y-2">
              {links.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#3A2E16] hover:bg-[#FFF7E3]"
                  >
                    <Icon size={16} />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Footer;
