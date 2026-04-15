export default function CTA() {
    return (
      <section className="py-32 text-center">
        <h2 className="text-5xl italic">
          Step into the <span className="text-primary">Lumière</span>
        </h2>
  
        <form className="mt-10 flex gap-4 justify-center">
          <input
            type="email"
            placeholder="Your email"
            className="border-b bg-transparent"
          />
          <button className="bg-primaryColor px-6 py-3 rounded-lg">
            Connect
          </button>
        </form>
      </section>
    );
  }