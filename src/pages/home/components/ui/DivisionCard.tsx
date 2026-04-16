type Props = {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    className?: string;
  };
  
  export default function DivisionCard({ title, subtitle, description, image, className = "" }: Props) {
    return (
      <div className={`relative h-[350px] rounded-xl overflow-hidden group cursor-pointer ${className}`}>
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-white bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})`, backgroundSize: '50%', backgroundRepeat: 'no-repeat' }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6">
        <h3 className="text-2xl text-primaryColor font-bold">
          {title}
        </h3>

        {subtitle && (
          <p className="italic text-white/80">{subtitle}</p>
        )}

        <p className="text-sm text-white/70 mt-2">
          {description}
        </p>
      </div>
    </div>
    );
  }