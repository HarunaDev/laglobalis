import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import img1 from "../../../../assets/modal.png"
// import img2 from "../../../../assets/modal2.png"

interface Props {
  onClose: () => void;
}

export default function PromoModal({ onClose }: Props) {
  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = "hidden";

    return () => {
      // Re-enable scrolling
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-black/75 backdrop-blur-sm flex items-center justify-center p-5 overflow-y-auto">
      <div className="relative w-full max-w-5xl max-h-[95vh] rounded-3xl overflow-hidden border border-[#B8973A] bg-[#1A2340] shadow-2xl">
        <div className="absolute -right-2 bottom-0 h-32 w-32 rounded-full bg-[#B8973A] flex items-center justify-center text-center text-[#1A2340] font-bold rotate-[-20deg] shadow-lg">
          Limited
          <br />
          Cohort
        </div>

        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white hover:text-[#B8973A]"
        >
          <X />
        </button>

        <div className="grid md:grid-cols-2">
          {/* LEFT */}

          <div className="p-12 flex flex-col justify-center">
            <span className="uppercase tracking-[6px] text-[#B8973A] text-sm">
              August 2026
            </span>

            <h1 className="mt-4 text-5xl font-serif text-[#FDF9F3] leading-tight">
              French Cohort One
            </h1>

            <p className="mt-6 text-gray-300 leading-8">
              Join our next French language cohort and learn with live classes,
              structured modules, community support and experienced instructors.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/academy/french/cohort"
                className="px-7 py-4 rounded-lg bg-[#B8973A] text-[#1A2340] font-semibold hover:scale-105 transition"
              >
                View Programme
              </Link>

              <button
                onClick={onClose}
                className="border border-[#B8973A] px-7 py-4 rounded-lg text-[#FDF9F3]"
              >
                Maybe Later
              </button>
            </div>
          </div>

          {/* RIGHT */}

          <div className="bg-[#243059] flex items-center justify-center p-10">
            <img
              src={img1}
              alt=""
              className="max-h-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
