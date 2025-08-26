type Props = {
  open: boolean;
  onClose: () => void;
  onLogout: () => void;
};

const ICONS = [
  { src: "https://storage.devpgs.app/u/ay81dQ.png", label: "menu 1" },
  { src: "https://storage.devpgs.app/u/9riL6v.png", label: "menu 2" },
  { src: "https://storage.devpgs.app/u/ANH6qe.png", label: "menu 3" },
  { src: "https://storage.devpgs.app/u/DDvPK5.png", label: "menu 4" },
  { src: "https://storage.devpgs.app/u/CeckmD.png", label: "menu 5" },
  { src: "https://storage.devpgs.app/u/yplaEC.png", label: "menu 6" },
];

export default function Sidebar({ open, onClose, onLogout }: Props) {
  return (
    <aside
      role="dialog"
      aria-label="Navigation"
      aria-hidden={!open}
      className={[
        "fixed inset-y-0 left-0 z-50 w-16 bg-black text-white",
        "flex flex-col items-center justify-between py-3",
        "transform-gpu transition-transform duration-200",
        open ? "translate-x-0" : "-translate-x-full",
        "lg:static lg:translate-x-0 lg:flex",
      ].join(" ")}
    >
      <div className="mt-2 space-y-3">
        {ICONS.map((it, idx) => (
          <button
            key={idx}
            type="button"
            className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 grid place-items-center"
            title={it.label}
            aria-label={it.label}
          >
            <img
              src={it.src}
              alt={it.label}
              className="w-5 h-5 object-contain filter invert"
            />
          </button>
        ))}
      </div>

      <div className="mb-1 space-y-2">
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 grid place-items-center lg:hidden"
          title="Close"
          aria-label="Close sidebar"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <button
          onClick={onLogout}
          className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 grid place-items-center"
          title="Logout"
          aria-label="Logout"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M10 7V5a2 2 0 0 1 2-2h7v18h-7a2 2 0 0 1-2-2v-2" />
            <path d="M15 12H3m0 0 3-3m-3 3 3 3" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
