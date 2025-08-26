import BrandLogo from '../BrandLogo';

type Props = {
  username: string;
  onLogout: () => void;
  onMenu: () => void;
};

export default function Topbar({ username, onLogout, onMenu }: Props) {
  return (
    <header className="sticky top-0 z-20 bg-white/85 backdrop-blur border-b">
      <div className="h-16 flex items-center gap-3 px-4 sm:px-6">
        <button
          onClick={onMenu}
          aria-label="Open menu"
          className="w-10 h-10 rounded-xl border border-black/15 bg-white hover:bg-black/5 grid place-items-center lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <BrandLogo className="h-6 sm:h-7 w-auto shrink-0 filter invert"/>

        {/* Search */}
        <div className="relative flex-1 max-w-2xl mx-2">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3-3" />
            </svg>
          </span>
          <input
            placeholder="Search Events...."
            className="w-full h-10 pl-9 pr-3 rounded-xl border border-black/10 bg-black/[0.04] text-sm outline-none focus:border-black/20"
          />
        </div>

        <div className="flex-1" />

        {/* User (icon + username) */}
        <div className="hidden sm:flex items-center gap-2 text-sm text-black/70">
          <img
            src="https://storage.devpgs.app/u/y9pT9l.png"
            alt="User"
            className="w-6 h-6 rounded-full object-contain"
          />
          <div className="leading-4">
            <span className="hidden md:inline">Signed in as </span>
            <span className="font-semibold">{username}</span>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={onLogout}
          className="h-10 px-4 rounded-xl border border-black/15 bg-white hover:bg-black/5 text-sm font-medium"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
