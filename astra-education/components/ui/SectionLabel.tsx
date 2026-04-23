interface SectionLabelProps {
  text: string;
  light?: boolean;
}

export default function SectionLabel({ text, light = false }: SectionLabelProps) {
  return (
    <p
      className={`text-xs font-semibold tracking-widest uppercase mb-3 font-inter ${
        light ? 'text-blue/80' : 'text-blue'
      }`}
    >
      {text}
    </p>
  );
}
