import { Program } from "../../../../../types/cohort";
import ProgramCard from "../ui/ProgramCard";
import SectionHeading from "../ui/SectionHeading";

interface Props {
    programmes: Program[];
}

export default function ProgramOptions({
    programmes,
}: Props) {

    return (
        <>
        <SectionHeading title="Programme Options" />
        <div className="grid lg:grid-cols-2 gap-16">

            {programmes.map((program) => (

                <ProgramCard
                    key={program.id}
                    program={program}
                />

            ))}

        </div>
        </>
    );
}