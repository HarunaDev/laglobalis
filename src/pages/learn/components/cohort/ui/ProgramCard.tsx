import { Program } from "../../../../../types/cohort";

interface Props {
    program: Program;
}

export default function ProgramCard({ program }: Props) {

    return (

        <div className="border border-[#C8A44D]/40 rounded-sm overflow-hidden bg-[#111C2B]">

            <div className="p-8">

                <p className="uppercase tracking-[4px] text-xs text-[#C8A44D]">
                    {program.level}
                </p>

                <h2 className="text-5xl font-serif text-white mt-3">
                    {program.title}
                </h2>

                <p className="text-gray-400 whitespace-pre-line mt-4">
                    {program.description}
                </p>

            </div>

            <div className="border-y border-[#2d3947] p-8">

                <p className="uppercase tracking-[3px] text-xs text-gray-400">
                    Total Investment
                </p>

                <div className="flex items-end gap-2 mt-3">

                    <h2 className="text-5xl text-[#D6B05B] font-bold">
                        ₦{program.investment.toLocaleString()}
                    </h2>

                    <span className="text-gray-400 mb-2">
                        / 6 months
                    </span>

                </div>

                {program.payInFull && (

                    <div className="inline-block mt-5 border border-[#C8A44D]/30 bg-[#2c2b24] px-4 py-2 text-[#D6B05B] text-sm">

                        ✦ Pay in full —
                        ₦{program.payInFull.amount.toLocaleString()}
                        (save ₦{program.payInFull.save.toLocaleString()})

                    </div>

                )}

            </div>

            <div className="p-8 space-y-5">

                <Row label="Duration" value={program.duration} />
                <Row label="Sessions per week" value={program.sessionsPerWeek} />
                <Row label="Hours per session" value={program.hoursPerSession} />
                <Row label="Total hours" value={program.totalHours} />
                <Row label="Class size" value={program.classSize} />
                <Row label="Rate per hour" value={program.ratePerHour} />

            </div>

        </div>

    );
}

function Row({
    label,
    value,
}: {
    label: string;
    value: string | number;
}) {
    return (
        <div className="flex justify-between border-b border-[#263241] pb-3">

            <span className="text-gray-400">
                {label}
            </span>

            <span className="font-semibold text-white">
                {value}
            </span>

        </div>
    );
}