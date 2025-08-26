import InfoCard from "../InfoCard";

type Props = { name: string; username: string; email: string };

export default function PlatformBody({ name, username, email }: Props) {
  return (
    <div className="px-4 sm:px-6 py-6">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-black/60">
          <span>Dashboard</span>
        </div>

        <div className="mt-2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Platform Dashboard
          </h1>
        </div>

        <div className="mt-6 flex flex-col gap-6">
          <InfoCard
            title="Name"
            value={name}
            icon={
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="8" r="3.6" />
                <path d="M4 20c2.6-3.4 5.4-5.1 8-5.1S17.4 16.6 20 20" />
              </svg>
            }
          />

          <InfoCard
            title="Username"
            value={username}
            icon={
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M7 7h10M7 12h10M7 17h6" />
              </svg>
            }
          />

          <InfoCard
            title="Email"
            value={email}
            icon={
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 6h16v12H4z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
}
