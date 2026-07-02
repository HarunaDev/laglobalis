interface Props {
    academy: string;
    title: string;
    subtitle: string;
    description: string;
}

export default function Hero({
    academy,
    title,
    subtitle,
    description,
}: Props) {
    return (
        <section className="text-center py-24">

            <p className="uppercase tracking-[6px] text-[#C8A44D] text-sm">
                {academy}
            </p>

            <h1 className="text-6xl text-white mt-6 font-serif">
                {title}
            </h1>

            <h2 className="text-5xl italic text-[#D5B05A] mt-2 font-serif">
                {subtitle}
            </h2>

            <p className="uppercase tracking-[5px] text-gray-400 mt-8 text-sm">
                {description}
            </p>

            <div className="w-24 h-[2px] bg-[#C8A44D] mx-auto mt-10"></div>

        </section>
    );
}