const Modal = ({ open, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      {/* Modal Box */}
      <div className="relative w-[92%] sm:w-[500px] rounded-2xl bg-[#111c2e] border border-white/5 shadow-2xl p-6">
        {children}
      </div>
    </div>
  );
};

export default Modal;
