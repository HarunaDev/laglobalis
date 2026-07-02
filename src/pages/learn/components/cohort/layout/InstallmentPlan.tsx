import InstallmentCard from "../ui/InstallmentCard";
import { InstallmentPlan } from "../../../../../types/cohort";
import SectionHeading from "../ui/SectionHeading";

interface Props {
    plans: InstallmentPlan[];
}

export default function InstallmentPlans({ plans }: Props) {
    return (
        <div className="mt-24">

        <SectionHeading title="Installment Plans" />
        <div className="grid lg:grid-cols-2 gap-16">
            {plans.map((plan) => (
                <InstallmentCard
                    key={plan.id}
                    plan={plan}
                />
            ))}
        </div>
        </div>
    );
}