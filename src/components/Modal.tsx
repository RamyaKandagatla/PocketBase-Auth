import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: any;
  maxWidthClass?: string;
};

export default function Modal({
  open,
  onClose,
  title,
  children,
  maxWidthClass = "max-w-lg",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const { style } = document.body;
    const prev = style.overflow;
    style.overflow = "hidden";
    // focus
    setTimeout(() => ref.current?.focus(), 0);
    return () => {
      window.removeEventListener("keydown", onKey);
      style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-[2px] flex items-center justify-center p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={ref}
        tabIndex={-1}
        className={`w-full ${maxWidthClass} rounded-[22px] bg-white text-black shadow-2xl ring-1 ring-black/10 p-6 md:p-8`}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <h2 className="text-[22px] font-extrabold mb-4">{title}</h2>
        )}
        {children}
      </div>
    </div>,
    document.body
  );
}
