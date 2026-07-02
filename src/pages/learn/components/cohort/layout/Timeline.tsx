import { TimelineItem } from "../../../../../types/cohort";
import SectionHeading from "../ui/SectionHeading";

interface Props {
    items: TimelineItem[];
}

export default function Timeline({ items }: Props) {
    return (
        <div className="mt-24">
            <SectionHeading title="Cohort Timeline" />

            <div className="relative mt-12">

            <div className="absolute top-4 left-0 w-full h-[2px] bg-[#D6B05B]/30"></div>

            <div className="grid grid-cols-5 gap-6 relative">

                {items.map((item) => (
                    <div
                        key={item.month}
                        className="text-center"
                    >
                        <div className="w-5 h-5 rounded-full border-2 border-[#D6B05B] bg-[#091423] mx-auto"></div>

                        <h3 className="mt-4 text-[#D6B05B] font-bold uppercase text-sm">
                            {item.month}
                        </h3>

                        <p className="text-gray-400 text-sm mt-2">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}