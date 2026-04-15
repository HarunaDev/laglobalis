type Props = {
    title: string;
    description: string;
  };
  
  export default function PillarCard({ title, description }: Props) {
    return (
      <div>
        <h4 className="text-xl text-primary">{title}</h4>
        <p className="text-sm text-secondary">{description}</p>
      </div>
    );
  }