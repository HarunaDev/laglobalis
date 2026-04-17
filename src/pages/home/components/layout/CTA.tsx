import emailjs from "emailjs-com";
import { useRef, useState } from "react";

export default function CTA() {
    const formRef = useRef<HTMLFormElement>(null);

    const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
        setLoading(true);
        setStatus("idle");
  
        await emailjs.sendForm(
          "service_naxyzds",
          "template_sokdc4e",
          formRef.current,
          "mQI4HCNEuD0nyqMoy"
        );
  
        // ✅ Clear form
        setEmail("");
        formRef.current.reset();
  
        // ✅ Success state
        setStatus("success");
      } catch (error) {
        console.error(error);
        setStatus("error");
      } finally {
        setLoading(false);
      }
  };
    return (
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20">
        
        {/* Card Container */}
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
          
          {/* Optional Glow */}
          <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />
  
          {/* Content */}
          <div className="relative z-10">
            
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl italic font-bold leading-tight">
              Step into the{" "}
              <span className="text-primaryColor">Lumière</span>
            </h2>
  
            {/* Form */}
            <form className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center" ref={formRef} onSubmit={sendEmail}>
              
              <input
                type="email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Your email"
                className="w-full sm:w-80 bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-primaryColor transition"
              />
  
              <button type="submit" disabled={loading} className="w-full sm:w-auto bg-primaryColor text-secondaryColor px-8 py-3 rounded-lg hover:scale-95 transition-all">
              {loading ? "Sending..." : "Connect"}
              </button>
  
            </form>

            {/* FEEDBACK */}
          {status === "success" && (
            <p className="mt-4 text-green-400 text-sm">
              ✅ Message sent successfully
            </p>
          )}

          {status === "error" && (
            <p className="mt-4 text-red-400 text-sm">
              ❌ Something went wrong. Try again.
            </p>
          )}
  
          </div>
        </div>
      </section>
    );
  }