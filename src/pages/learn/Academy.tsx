import About from "./components/academy/layout/About";
import Hero from "./components/academy/layout/Hero";
import HowItWorks from "./components/academy/ui/HowItWorks";
import Programs from "./components/academy/layout/Program";
import WhyChooseUs from "./components/academy/ui/WhyChooseUs";
import Intro from "./components/academy/ui/Intro";
import CTA from "../home/components/layout/CTA";

type Props = {
    isHovered: boolean;
  }

export default function Academy({isHovered} : Props) {
  return (
    <main className="relative mt-24">
        <div
          className={`h-0 w-[40rem] absolute lg:top-[10%] top-[3%] right-[2%] -rotate-[30deg] -z-10 ${
            isHovered
              ? "shadow-[0_0_900px_30px_#453059]"
              : "shadow-[0_0_900px_30px_#E99B63]"
          }`}
        />
        <div className="relative z-10">
        <Hero />
        </div>
        <div className="relative z-10">
        <Intro />
        </div>
        <div className="relative z-10">
        <About />
        </div>
        <div className="relative z-10">
        <Programs />
        </div>
        <div className="relative z-10">
        <WhyChooseUs />
        </div>
        <div className="relative z-10">
        <HowItWorks />
        </div>
        <div className="relative z-10">
        <CTA />
        </div>
    </main>
  )
}
