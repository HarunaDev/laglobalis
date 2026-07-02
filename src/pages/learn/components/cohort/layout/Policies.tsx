import { Policy } from "../../../../../types/cohort";

interface Props {
  items: Policy[];
}

export default function Policies({ items }: Props) {
  return (
    <div className="mt-24">
    
      <div className="border border-[#D6B05B]/50 rounded p-10">
        <h3 className="uppercase tracking-[4px] text-[#D6B05B] mb-8">
          Enrolment & Payment Policies
        </h3>

        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-5">
          {items.map((item) => (
            <div key={item.text} className="flex gap-3 items-start">
              <span className="text-[#D6B05B]">—</span>

              <p className="text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
