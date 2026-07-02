import { IncludedItem } from "../../../../../types/cohort";

interface Props {
    item: IncludedItem;
}

export default function IncludedCard({ item }: Props) {
    return (
        <div className="border border-[#2b3947] rounded p-8 text-center bg-secondaryColor">

            <div className="text-4xl">
                {item.icon}
            </div>

            <h3 className="uppercase tracking-[3px] text-[#D6B05B] mt-5 font-semibold">
                {item.title}
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
                {item.description}
            </p>

        </div>
    );
}