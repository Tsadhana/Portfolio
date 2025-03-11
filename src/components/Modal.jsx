import { createPortal } from "react-dom";

export default function Modal({ isOpen, setIsOpen, header, footer, children }) {
  if (!isOpen) return null; // Prevents rendering if modal is closed

  return createPortal(
    <div
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 text-white" // Added `z-50`
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="no-scrollbar mb-[40px] h-full max-h-[min-content] w-full max-w-[750px] overflow-auto rounded-lg bg-[#171721] p-6 text-white shadow-lg"
      >
        {header}
        <div className="my-4 text-white">{children}</div>
        {footer}
      </div>
    </div>,
    document.getElementById("portal"),
  );
}
