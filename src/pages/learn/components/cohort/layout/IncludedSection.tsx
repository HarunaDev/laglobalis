import IncludedCard from "../ui/IncludedCard";
import { IncludedItem } from "../../../../../types/cohort";
import SectionHeading from "../ui/SectionHeading";

interface Props {
    items: IncludedItem[];
}

export default function IncludedSection({ items }: Props) {
    return (
        <div className="mt-24">
            <SectionHeading title="What's Included" />
            <div className="grid lg:grid-cols-3 gap-8">
            {items.map((item) => (
                <IncludedCard
                    key={item.title}
                    item={item}
                />
            ))}
        </div>
        </div>
    );
}