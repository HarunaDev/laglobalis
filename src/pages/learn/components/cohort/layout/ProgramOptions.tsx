import { Program } from "../../../../../types/cohort";
import ProgramCard from "../ui/ProgramCard";

interface Props {
    programmes: Program[];
}

export default function ProgramOptions({
    programmes,
}: Props) {

    return (

        <div className="grid lg:grid-cols-2 gap-8">

            {programmes.map((program) => (

                <ProgramCard
                    key={program.id}
                    program={program}
                />

            ))}

        </div>

    );
}