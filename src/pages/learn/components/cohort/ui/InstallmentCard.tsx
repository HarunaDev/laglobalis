import { InstallmentPlan } from "../../../../../types/cohort";

interface Props {
    plan: InstallmentPlan;
}

export default function InstallmentCard({ plan }: Props) {
    return (
        <div className="border border-[#2c3847] rounded bg-secondaryMid overflow-hidden">

            <div className="flex justify-between bg-secondaryColor px-6 py-4">

                <span className="uppercase tracking-[3px] text-[#D6B05B] text-sm">
                    {plan.title}
                </span>

                <span className="font-bold text-[#D6B05B]">
                    ₦{plan.total.toLocaleString()}
                </span>

            </div>

            {plan.installments.map((item) => (
                <div
                    key={item.title}
                    className="flex justify-between px-6 py-5 border-b border-white/20"
                >
                    <div>
                        <h4 className="text-white">{item.title}</h4>

                        <p className="text-gray-400 text-sm">
                            {item.due}
                        </p>
                    </div>

                    <strong className="text-white">
                        ₦{item.amount.toLocaleString()}
                    </strong>
                </div>
            ))}

            <div className="flex justify-between px-6 py-5 bg-secondaryColor">

                <span className="uppercase tracking-[3px] text-[#D6B05B]">
                    Total
                </span>

                <strong className="text-[#D6B05B]">
                    ₦{plan.total.toLocaleString()}
                </strong>

            </div>

        </div>
    );
}