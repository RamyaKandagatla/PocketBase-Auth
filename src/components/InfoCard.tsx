import React from "react";

type InfoCardProps = {
  title: string;
  value: string | React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
};

export default function InfoCard({ title, value, icon, className = "" }: InfoCardProps) {
  return (
    <div
      className={`w-full rounded-2xl border border-black/10 bg-black/[0.03] p-5 ${className}`}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-black/70">{title}</h3>
        {icon && (
          <div className="w-9 h-9 rounded-xl bg-white shadow grid place-items-center border border-black/10">
            {icon}
          </div>
        )}
      </div>
      <div className="text-xl font-bold break-words">{value}</div>
    </div>
  );
}
