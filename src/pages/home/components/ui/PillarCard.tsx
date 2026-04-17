type Props = {
    title: string;
    description: string;
    icon: React.ElementType;
  };
  
  export default function PillarCard({ title, description, icon: Icon }: Props) {
    return (
      <div className="p-6 rounded-xl bg-surface-container border border-white/10 hover:border-primaryColor/40 transition-all group">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primaryColor/10 border border-primaryColor/20 mb-4 group-hover:scale-110 transition">
        <Icon className="text-primaryColor" size={24} />
      </div>


        <h4 className="text-xl text-primaryColor font-bold">{title}</h4>
        <p className="text-sm text-secondary leading-relaxed">{description}</p>
      </div>
    );
  }