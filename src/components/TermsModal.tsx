import Modal from "./Modal";

export default function TermsModal({
  open,
  onClose,
}: { open: boolean; onClose: () => void }) {
  return (
    <Modal open={open} onClose={onClose} title="Terms & Conditions">
      <div className="max-h-[60vh] overflow-y-auto space-y-4 text-black/80 text-sm leading-6">
        <p>
          These are the Terms and Conditions governing the use of this Service and
          the agreement that operates between You and the Company. These Terms and
          Conditions set out the rights and obligations of all users regarding the
          use of the Service.
        </p>
        <p>
          Your access to and use of the Service is conditioned on Your acceptance
          of and compliance with these Terms and Conditions. These Terms and
          Conditions apply to all visitors, users and others who access or use the
          Service.
        </p>
        <p>
          By accessing or using the Service You agree to be bound by these Terms
          and Conditions. If You disagree with any part of these Terms and
          Conditions then You may not access the Service.
        </p>
        <p>
          You represent that you are over the age of 18. The Company does not
          permit those under 18 to use the Service.
        </p>
        <p>
          Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
        </p>
      </div>

      <div className="mt-6">
        <button
          type="button"
          onClick={onClose}
          className="rounded-[12px] bg-black text-white px-4 py-2"
        >
          Close
        </button>
      </div>
    </Modal>
  );
}
