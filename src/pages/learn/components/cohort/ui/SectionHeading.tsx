interface Props {
    title: string;
}

export default function SectionHeading({ title }: Props) {
    return (
        <div className="flex items-center gap-5 mb-8">

            <h2 className="text-3xl text-white font-serif whitespace-nowrap">
                {title}
            </h2>

            <div className="h-px bg-[#3a4656] w-full"></div>

        </div>
    );
}